const { dataResponse } = require('../../utils')

module.exports = dataResponse(({
  services: { user },
  params: { email, password }
}) => user.login(email, password))
