const { dataResponse } = require('../../utils')
const updateUserConstraints = require('./updateUser.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user },
  params: { id },
  body
}) => {
  const updateUser = validate.cleanAttributes(body, updateUserConstraints)
  const errors = validate(updateUser, updateUserConstraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }

  delete updateUser.id
  delete updateUser.ukey
  delete updateUser.lastLoginAt
  delete updateUser.lastPasswordChangeAt
  delete updateUser.createdAt
  delete updateUser.updatedAt

  const updateUserResult = await user.update(id, updateUser)
  const { error, message } = updateUserResult
  return {
    error: Boolean(error),
    code: !error ? 200 : 422,
    message,
    result: updateUserResult
  }
})
