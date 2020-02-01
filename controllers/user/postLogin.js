const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { user },
  body: { email, password }
}) => user.login(email, password))
