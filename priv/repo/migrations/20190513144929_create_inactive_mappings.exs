defmodule PhxImportMaps.Repo.Migrations.CreateInactiveMappings do
  use Ecto.Migration

  def change do
    create table(:inactive_mappings) do
      add :name, :string
      add :url, :string
      add :active_mapping_id, references(:active_mappings, on_delete: :nothing)

      timestamps()
    end

    create index(:inactive_mappings, [:active_mapping_id])
  end
end
