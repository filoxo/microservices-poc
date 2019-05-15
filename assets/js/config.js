import * as singleSpa from 'single-spa'

function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => (
            location.href.indexOf(`${location.origin}/${prefix}`) !== -1
        )
    )
}

singleSpa.registerApplication('navbar', () => SystemJS.import('navbar-ui'), () => true)
singleSpa.registerApplication('messenger', () => SystemJS.import('messenger-ui'), (location) => prefix(location, 'messenger'))

singleSpa.start()
