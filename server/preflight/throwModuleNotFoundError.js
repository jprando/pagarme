module.exports = (moduleName) => {
  console.error('\r\n## PREFLIGHT ERROR ##')
  console.error(`${moduleName} module not found`)
  console.error(`use \`yarn add ${moduleName}\` to fix it`)
  console.error('and try again\r\n')
  process.exit(1)
}
