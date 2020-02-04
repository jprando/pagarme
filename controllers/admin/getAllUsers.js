const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({ services: { user } }) => user.all())
