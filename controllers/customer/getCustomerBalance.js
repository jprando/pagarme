const dataResponse = require('../dataResponse')

module.exports = dataResponse(async ({
  auth: { ukey },
  services: { customer }
}) => {
  return customer.balance(ukey)
})
