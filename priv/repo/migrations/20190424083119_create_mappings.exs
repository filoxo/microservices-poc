defmodule PhxImportMaps.Repo.Migrations.CreateMappings do
  use Ecto.Migration

  def change do
    create table(:mappings) do
      add :name, :string
      add :url, :string
      add :active, :boolean, default: false, null: false

      timestamps()
    end

  end
end
