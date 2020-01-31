const validate = require('validate.js')

module.exports = () => {
  const PG_HOST = process.env.PG_HOST || '127.0.0.1'
  const PG_PORT = process.env.PG_PORT || 5432
  const PG_USER = process.env.PG_USER || 'postgres'
  const PG_PASS = process.env.PG_PASS || ''
  const PG_DATABASE = process.env.PG_DATABASE || 'postgres'

  const constraints = {
    PG_HOST: {
      type: 'string',
      presence: { allowEmpty: false, message: '^PG_HOST must be informed' }
    },
    PG_PORT: {
      presence: { message: '^PG_PORT must be informed' },
      numericality: {
        onlyInteger: true,
        greaterThan: 0,
        lessThanOrEqualTo: 65535,
        notValid: '^PG_PORT is not a number',
        notInteger: '^PG_PORT must be of type integer',
        notGreaterThan: '^PG_PORT must be greater than %{count}',
        notLessThanOrEqualTo: '^PG_PORT must be less than or equal to %{count}'
      }
    },
    PG_USER: {
      type: 'string',
      presence: { allowEmpty: false, message: '^PG_USER must be informed' }
    },
    PG_DATABASE: {
      type: 'string',
      presence: { allowEmpty: false, message: '^PG_DATABASE must be informed' }
    }
  }

  const erros = validate({
    PG_HOST,
    PG_PORT,
    PG_USER,
    PG_PASS,
    PG_DATABASE
  }, constraints, { format: 'flat' })

  if (erros) {
    throw new Error('\r\n'.concat(erros.join('\r\n')))
  }

  /// postgres://username:password@host:port/database
  const connection = `postgres://${PG_USER}:${PG_PASS}@${PG_HOST}:${PG_PORT}/${PG_DATABASE}`
  return connection
}
