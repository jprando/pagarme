const { dataResponse } = require('../../utils')
const getData = require('../getData')

module.exports = dataResponse(async ({
  services: { user }
}) => getData(user, 'Users'))
