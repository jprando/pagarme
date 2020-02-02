const { EOL } = require('os')

module.exports = (moduleName) => {
  console.error(`${EOL}## PREFLIGHT ERROR ##`)
  console.error(`${moduleName} module not found`)
  console.error(`use \`yarn add ${moduleName}\` to fix it`)
  console.error(`and try again${EOL}`)
  process.exit(1)
}
