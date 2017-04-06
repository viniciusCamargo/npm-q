const path = require('path')
const createFile = require('./src/createFile')
const createDirectory = require('./src/createDirectory')

const directoryName = process.argv[2] || ''

const packageJson = {
  name: directoryName || path.basename(__dirname),
  version: '0.0.1',
  scripts: {
    start: 'node app.js'
  }
}

if (directoryName) {
  createDirectory(directoryName, packageJson)
} else {
  createFile('app.js', '')
  createFile('package.json', packageJson)
}
