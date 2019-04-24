defmodule PhxImportMaps.ImportMaps.Mapping do
  use Ecto.Schema
  import Ecto.Changeset

  schema "mappings" do
    field :active, :boolean, default: false
    field :name, :string
    field :url, :string

    timestamps()
  end

  @doc false
  def changeset(mapping, attrs) do
    mapping
    |> cast(attrs, [:name, :url, :active])
    |> validate_required([:name, :url, :active])
  end
end
