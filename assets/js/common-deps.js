function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script')
  newScript.type = 'systemjs-importmap'
  newScript.text = JSON.stringify(newMapJSON)
  const firstMapScript = document.querySelector('script[type="systemjs-importmap"]:first-of-type')

  firstMapScript.insertAdjacentElement(
    'beforebegin',
    newScript
  )
}

const devDependencies = {
  imports: {
    'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.development.js',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.development.js',
    'single-spa': 'https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js',
    'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
  }
}

const prodDependencies = {
  imports: {
    'react': 'https://cdnjs.cloudflare.com/ajax/libs/react/16.8.6/umd/react.production.min.js',
    'react-dom': 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.8.6/umd/react-dom.production.min.js',
    'single-spa': 'https://unpkg.com/single-spa@4.3.2/lib/umd/single-spa.min.js',
    'lodash': 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js',
  }
}

insertNewImportMap(
    process.env.NODE_ENV === 'production'
    ? prodDependencies
    : devDependencies
)