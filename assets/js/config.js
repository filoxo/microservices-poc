import * as singleSpa from 'single-spa'

function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => (
            location.href.indexOf(`${location.origin}/${prefix}`) !== -1
        )
    )
}

singleSpa.registerApplication('navbar-ui', () => SystemJS.import('navbar-ui'), () => true)
singleSpa.registerApplication('messenger-ui', () => SystemJS.import('messenger-ui'), () => true)

singleSpa.start()
