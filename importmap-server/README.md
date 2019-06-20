# Import maps server

This is a microservice to manage [import-maps](https://github.com/WICG/import-maps) to serve a microservices front-end, using single-spa.

## Development

- clone repo
- run `mix deps.get`
- run `npm i --prefix assets`
- run `mix phx.server`

## Usage

### Upsert mapping

Upsert one or more import maps. A successful insert will return the same mapping.

```
curl --request POST \
  --url http://localhost:9999/api \
  --header 'content-type: application/json' \
  --data '{
  	"package-name": "http://path/to/package.js"
  }'
```

### Get import map

Get import-map JSON of all packages.

```
curl --request GET --url http://localhost:9999/api
```
