defmodule PhxImportMaps.Repo.Migrations.CreateActiveMappings do
  use Ecto.Migration

  def change do
    create table(:active_mappings) do
      add :name, :string
      add :url, :string

      timestamps()
    end

    create unique_index(:active_mappings, [:name])
  end
end
