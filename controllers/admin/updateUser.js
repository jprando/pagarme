const { dataResponse } = require('../../utils')
const updateUserConstraints = require('./updateUser.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user },
  params: { id },
  body
}) => {
  const newUser = validate.cleanAttributes(body, updateUserConstraints)
  const errors = validate(newUser, updateUserConstraints)
  return !errors
    ? user.update(id, newUser)
    : { error: true, code: 400, errors }
})
