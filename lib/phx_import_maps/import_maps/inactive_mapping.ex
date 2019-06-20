defmodule PhxImportMaps.ImportMaps.InactiveMapping do
  use Ecto.Schema
  import Ecto.Changeset

  @derive {Jason.Encoder, only: [:name, :url, :active_mapping_id, :inserted_at]}
  schema "inactive_mappings" do
    field :name, :string
    field :original_inserted_at, :naive_datetime
    field :url, :string
    field :active_mapping_id, :id

    timestamps()
  end

  @doc false
  def changeset(inactive_mapping, attrs) do
    inactive_mapping
    |> cast(attrs, [:name, :url, :active_mapping_id, :original_inserted_at])
    |> validate_required([:name, :url, :active_mapping_id, :original_inserted_at])
  end
end
