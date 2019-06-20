# microservices poc

This is a proof of concept of microservices at Podium. 

There are 4 applications contained in this repo:

- importmap-server: an Elixir Phoenix application that dynamically creates the import-map and renders the initial html page
- navbar-ui: Navigation application, build using Svelte
- messenger-ui: Messenger application, build using React
- dashboard-ui: Dashboard application, build using React

## Development

<small>You will likely need a terminal window per application process.</small>

- Run the importmap-server
    - `cd importmap-server`
    - `mix deps.get`
    - `npm i --prefix assets`
    - `mix phx.server`
    - insert import mappings to the database
 
          curl --request POST \
            --url http://localhost:9999/api \
            --header 'content-type: application/json' \
            --data '{
            "navbar-ui": "http://localhost:9998/bundle.js"
          }'

          curl --request POST \
            --url http://localhost:9999/api \
            --header 'content-type: application/json' \
            --data '{
            "messenger-ui": "http://localhost:5555/messenger-ui.js"
          }'

          curl --request POST \
            --url http://localhost:9999/api \
            --header 'content-type: application/json' \
            --data '{
            "dashboard-ui": "http://localhost:4444/dashboard-ui.js"
          }'
- Run navbar-ui
    - `cd navbar-ui`
    - `yarn install`
    - `yarn start`
- Run messenger-ui
    - `cd messenger-ui`
    - `yarn install`
    - `yarn start`
- Run dashboard-ui
    - `cd dashboard-ui`
    - `yarn install`
    - `yarn start`
- visit http://localhost:9999
- optionally install the single-spa Inspector

## Feature Highlights

### Coexistence

Notice how Svelte and React are coexisting on the page. Ultimately they are both javascript libraries, and because of clear application boundaries, they don't conflict. Each app is focused on doing One Thing well.

### Navigation

Notice how the navbar works, even when messenger is changing the URL. svelte-routing and react-router both utilize the browser History API so they are compatible with each other and coexist without conflict.

### Resilience

I added a new little feature that pops out the conversation into a little widget. I can then navigate to dashboard. That in and of itself if kind of cool, and all of the associated code is still within the messenger repo. But, lets say dashboard has a problem and crashes. (click on page) Again, because the apps are self-contained, the error in dashboard doesn't break messenger.

### Overrides

With import-maps, developing an application is as simple as setting an override for your service. You can do this easily with the single-spa Inspector.

## Lessons learned

- Dynamic import-map is not necessary, could be generated via a lambda fn as build/CI finishes; and stored as a file
-   