const dataResponse = require('../dataResponse')
const getById = require('../getById')

module.exports = dataResponse(async ({
  services: { user },
  params: { id }
}) => getById(id, user, 'User'))
