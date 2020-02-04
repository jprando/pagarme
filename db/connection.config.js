const os = require('os')
const validate = require('validate.js')

const {
  PG_HOST = '127.0.0.1',
  PG_PORT = 5432,
  PG_USER = 'postgres',
  PG_PASS = '',
  PG_SCHEMA = 'public',
  PG_DATABASE = 'pagarme'
} = process.env

const constraints = require('./connection.validation.json')

const config = {
  PG_HOST,
  PG_PORT,
  PG_USER,
  PG_PASS,
  PG_SCHEMA,
  PG_DATABASE
}

const erros = validate(config, constraints, { format: 'flat' })

if (erros) {
  console.error([
    '',
    '## DATABASE ERROR ##',
    'Environment variable',
    ...erros,
    ''
  ].join(os.EOL))
  process.exit(1)
}

module.exports = config
