const { dataResponse } = require('../../utils')
const getAll = require('./../getAll')

module.exports = dataResponse(async ({
  services: { user }
}) => getAll(user, 'Users'))
