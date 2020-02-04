const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  services: { user },
  params: { id }
}) => {
  if (id <= 0) {
    return { error: true, code: 400, message: 'User Id must be positive number' }
  }

  const _200OK = { code: 200, message: `User with ID ${id} deleted successfully` }
  const _404NOTFOUND = { code: 404, message: `User with ID ${id} not found` }

  return user.delete(id)
    .then(deleted => (deleted && _200OK) || _404NOTFOUND)
})
