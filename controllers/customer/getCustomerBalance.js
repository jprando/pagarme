const dataResponse = require('../dataResponse')

module.exports = dataResponse(async ({
  auth: { ukey },
  services: { customer },
  params
}) => {
  const year = Number.parseInt(params.year) || new Date().getUTCFullYear()
  const month = Number.parseInt(params.month) || new Date().getUTCMonth() + 1
  return customer.balance(ukey, year, month)
})
