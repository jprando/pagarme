const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  services: { user },
  params: { id }
}) => {
  return user.byId(id)
    .then(user => user || { code: 404, message: 'User not found' })
})
