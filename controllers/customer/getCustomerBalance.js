const dataResponse = require('../dataResponse')

module.exports = dataResponse(async ({
  auth: { ukey },
  services: { customer },
  params
}) => {
  const yearNow = new Date().getUTCFullYear()
  const monthNow = new Date().getUTCMonth() + 1
  let year = Number.parseInt(params.year)
  let month = Number.parseInt(params.month)

  if (year < 1990 || year > yearNow) {
    return { error: true, code: 400, message: `year must be between 1990 and ${yearNow}` }
  }
  if (month < 1) {
    return { error: true, code: 400, message: 'month must be a positive number, greater than zero' }
  }
  if (year === yearNow && month > monthNow) {
    return { error: true, code: 400, message: 'month not be in the future' }
  }
  if (year !== yearNow && month > 12) {
    return { error: true, code: 400, message: 'month must be between 1 and 12' }
  }

  year = year || yearNow
  month = month || monthNow

  return customer.balance(ukey, year, month)
})
