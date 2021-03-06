defmodule PhxImportMapsWeb.Router do
  use PhxImportMapsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :put_layout, false
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PhxImportMapsWeb do
    pipe_through :api
    post "/", PageController, :add_mappings
    get "/", PageController, :get_mappings
  end

  scope "/", PhxImportMapsWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhxImportMapsWeb do
  #   pipe_through :api
  # end
end
