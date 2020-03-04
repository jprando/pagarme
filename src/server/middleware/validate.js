const { cpf, cnpj } = require('cpf-cnpj-validator')
const validate = require('validate.js')

const testNumberCreditCard = value =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})$/
    .test(value) ? undefined : 'is not valid credit card number'

validate.extend(validate.validators.datetime, {
  parse: function (value, options) {
    return new Date(value)
  },
  // Input is a unix timestamp
  format: function (value, options) {
    var format = options.dateOnly ? 'YYYY-MM-DD' : 'YYYY-MM-DD hh:mm:ss'
    return new Date(value).toISOString(format)
  }
})

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
      : undefined,

  isCreditsCard: (value, options) => {
    if (value) {
      // Amex
      if ((/^(34|37).*$/).test(value) && value.length === 15) {
        return testNumberCreditCard(value)
      }
      // Visa, Mastercard
      if ((/^(4|5[1-5]).*$/).test(value) && value.length === 16) {
        return testNumberCreditCard(value)
      }
      return options.message || 'is not length valid'
    }
  }
}

module.exports = validate
