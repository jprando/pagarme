module.exports = () => {
  console.error('\r\n## PREFLIGHT ERROR ##')
  console.error(`NODE_ENV '${process.env.NODE_ENV}' informed, not is valid\r\n`)
  process.exit(1)
}
