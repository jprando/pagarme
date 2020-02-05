const { dataResponse } = require('../../utils')
const deleteById = require('./../deleteById')

module.exports = dataResponse(async ({
  services: { user },
  params: { id }
}) => deleteById(id, user, 'User'))
