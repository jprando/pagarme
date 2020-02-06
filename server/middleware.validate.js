const { cpf, cnpj } = require('cpf-cnpj-validator')
const validate = require('validate.js')

validate.validators = {
  ...validate.validators,

  isCpf: value => value && !cpf.isValid(value)
    ? '^CPF is not a valid value'
    : undefined,

  isCnpj: value => value && !cnpj.isValid(value)
    ? '^CNPJ is not a valid value'
    : undefined,

  notAllowEmpty: (value, options, fieldName, row) =>
    Object.keys(row).includes(fieldName) &&
    ([null, undefined, ''].includes(value) || value.trim() === '')
      ? options.message || "don't must be empty when informed"
      : undefined
}

module.exports = validate
