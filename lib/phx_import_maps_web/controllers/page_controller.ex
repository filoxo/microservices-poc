defmodule PhxImportMapsWeb.PageController do
  use PhxImportMapsWeb, :controller
  alias PhxImportMaps.ImportMaps.{ActiveMapping, InactiveMapping}
  alias PhxImportMaps.Repo

  def index(conn, _params) do
    render(conn, "index.html")
  end
  def add_mappings(conn, params) do

   {:ok, result} = Repo.transaction(fn ->
      active_mapping = Repo.get_by(ActiveMapping, name: params["name"])

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
      |> ActiveMapping.changeset(%{url: params["url"]})
      |> Repo.insert_or_update()

      updated_active_mapping
    end)

    json(conn, %{result: result})
  end

  def get_mappings(conn, _params) do
    json(conn, %{})
  end
end
