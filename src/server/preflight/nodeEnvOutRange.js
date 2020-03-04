const { EOL } = require('os')

module.exports = () => {
  console.error([
    '',
    '## PREFLIGHT ERROR ##',
    `NODE_ENV '${process.env.NODE_ENV}' informed, not is valid${EOL}`,
    ''
  ].join(EOL))
  process.exit(1)
}
