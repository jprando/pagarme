const { dataResponse } = require('../../utils')
const newUserConstraints = require('./newUser.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user },
  body
}) => {
  const newUser = validate.cleanAttributes(body, newUserConstraints)
  const errors = validate(newUser, newUserConstraints)
  return !errors
    ? { error: false, code: 201, result: user.create(newUser) }
    : { error: true, code: 400, errors }
})
