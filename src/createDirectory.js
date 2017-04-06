const fs = require('fs')
const path = require('path')
const createFile = require('./createFile')
const log = require('./log')

const makeDirectory = (directoryName, packageJsonContent) => {
  fs.mkdir(directoryName, (err) => {
    if (err) {
      return log.error(err)
    }

    log(`/${directoryName} created.`)

    createFile(path.join(directoryName, 'app.js'), '')
    createFile(path.join(directoryName, 'package.json'), packageJsonContent)
  })
}

const createDirectory = (directoryName, packageJsonContent) => {
  return fs.access(directoryName, (err) => {
    if (err) {
      return makeDirectory(directoryName, packageJsonContent)
    }

    log.error(`/${directoryName} already exists.`)
  })
}

module.exports = createDirectory
