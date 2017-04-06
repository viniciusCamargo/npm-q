const colors = {
  blue: '\x1b[47m \x1b[34m %s \x1b[0m \x1b[0m',
  red: '\x1b[47m \x1b[31m %s \x1b[0m \x1b[0m'
}

const log = (toLog) => {
  console.log(colors.blue, toLog)
}

log.error = (toLog) => {
  console.error(colors.red, toLog)
}

module.exports = log
