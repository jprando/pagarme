const { dataResponse } = require('../../utils')
const getById = require('./../getById')

module.exports = dataResponse(async ({
  services: { user },
  params: { id }
}) => getById(id, user, 'User'))
