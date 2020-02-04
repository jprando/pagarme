const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  services: { user }
}) => {
  return user.all()
})
