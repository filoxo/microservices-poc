defmodule PhxImportMaps.Repo do
  use Ecto.Repo,
    otp_app: :phx_import_maps,
    adapter: Ecto.Adapters.Postgres
end
