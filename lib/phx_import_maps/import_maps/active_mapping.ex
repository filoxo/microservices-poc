defmodule PhxImportMaps.ImportMaps.ActiveMapping do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name, :url, :inserted_at]}
  schema "active_mappings" do
    field :name, :string
    field :url, :string

    timestamps()
  end

  @doc false
  def changeset(active_mapping, attrs) do
    active_mapping
    |> cast(attrs, [:name, :url])
    |> validate_required([:name, :url])
  end
end
