const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  services: { user }
}) => {
  return user.findAll()
    .then(users => users.map(user => {
      delete user.credential
      return user
    }))
})
