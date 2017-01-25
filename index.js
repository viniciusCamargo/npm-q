#!/usr/bin/env node
const fs = require('fs')

const colors = {
  blue: '\x1b[47m \x1b[34m %s \x1b[0m \x1b[0m',
  red: '\x1b[47m \x1b[31m %s \x1b[0m \x1b[0m'
}

const createFile = (fileName, content) => {
  fs.writeFile(fileName, content, { flag: 'wx' }, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(colors.red,`${fileName} already exists.`)
        return
      } else {
        console.error(colors.red, err)
      }
    }

    console.log(colors.blue, `${fileName} created.`)
  })
}

const cwd = () => {
  const cwd = process.cwd()
  const lastSlashIndex = cwd.lastIndexOf('/') + 1
  return cwd.slice(lastSlashIndex)
}

const obj = {
  name: cwd(),
  version: '0.0.1',
  scripts: {
    start: 'node app.js'
  }
 }

 module.exports = createFile

createFile('app.js', '')
createFile('package.json', JSON.stringify(obj, null, '\t'))
