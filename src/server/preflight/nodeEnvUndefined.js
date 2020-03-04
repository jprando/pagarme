const { EOL } = require('os')

module.exports = () => {
  console.error([
    '',
    '## PREFLIGHT ERROR ##',
    'NODE_ENV must be informed',
    ''
  ].join(EOL))
  process.exit(1)
}
