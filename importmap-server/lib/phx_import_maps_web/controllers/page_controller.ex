defmodule PhxImportMapsWeb.PageController do
  use PhxImportMapsWeb, :controller
  alias PhxImportMaps.ImportMaps.{ActiveMapping, InactiveMapping}
  alias PhxImportMaps.Repo

  def index(conn, _params) do
    import_map = %{imports: get_import_map()} |> Jason.encode!(pretty: true) |> Phoenix.HTML.raw
    render(conn, :index, import_map: import_map)
  end

  @doc "Creates an active mapping, and archives an existing previous mapping."
  def add_mappings(conn, params) do
    import_map = Repo.transaction(fn ->
      params |> Enum.map(&upsert_mapping/1)
    end)
    |> elem(1)
    |> format_import_map_json()

    json(conn, import_map)
  end

  defp upsert_mapping({name, url}) do
    active_mapping = Repo.get_by(ActiveMapping, name: name) || %ActiveMapping{name: name, url: url}

    if !is_nil(active_mapping.inserted_at) do
      InactiveMapping.changeset(%InactiveMapping{}, %{
        name: active_mapping.name,
        url: active_mapping.url,
        active_mapping_id: active_mapping.id,
        original_inserted_at: active_mapping.inserted_at
      })
      |> Repo.insert()
    end

    {:ok, updated_active_mapping} = active_mapping
    |> ActiveMapping.changeset(%{url: url})
    |> Repo.insert_or_update()

    updated_active_mapping
  end

  def get_mappings(conn, _params) do
    json(conn, get_import_map())
  end

  def get_import_map() do
    Repo.all(ActiveMapping) |> format_import_map_json()
  end

  defp format_import_map_json(mapping_list) do
    mapping_list |> Enum.reduce(%{}, fn mapping, import_map ->
      Map.put(import_map, mapping.name, mapping.url)
    end)
  end
end
