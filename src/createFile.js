const fs = require('fs')
const log = require('./log')

const createFile = (fileName, content) => {
  const formattedContent = content ? JSON.stringify(content, null, '\t') : ''

  fs.writeFile(fileName, formattedContent, { flag: 'wx' }, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        return log.error(`${fileName} already exists.`)
      }
    }

    log(`${fileName} created.`)
  })
}

module.exports = createFile
