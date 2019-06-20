import * as singleSpa from 'single-spa'

function prefix(location, ...prefixes) {
    return prefixes.some(
        prefix => (
            location.href.includes(`${location.origin}/${prefix}`)
        )
    )
}

singleSpa.registerApplication('navbar-ui', () => SystemJS.import('navbar-ui'), () => true)
singleSpa.registerApplication('messenger-ui', () => SystemJS.import('messenger-ui'), () => true)
singleSpa.registerApplication('dashboard-ui', () => SystemJS.import('dashboard-ui'), (location) => prefix(location, 'dashboard'))

singleSpa.start()
