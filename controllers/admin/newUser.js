const { dataResponse } = require('../../utils')
const newUserConstraints = require('./newUser.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user },
  body
}) => {
  const newUser = validate.cleanAttributes(body, newUserConstraints)
  const errors = validate(newUser, newUserConstraints)
  if (errors) {
    return { error: true, code: 422, errors }
  }
  const newUserResult = await user.create(newUser)
  const { error, message } = newUserResult
  return {
    error: Boolean(error),
    code: !error ? 201 : 422,
    message,
    result: newUserResult
  }
})
