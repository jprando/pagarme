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
    return { error: true, code: 400, errors }
  }
  return user.create(newUser)
})
