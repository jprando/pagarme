module.exports = () => {
  console.error('\r\n## PREFLIGHT ERROR ##')
  console.error('NODE_ENV must be informed\r\n')
  process.exit(1)
}
