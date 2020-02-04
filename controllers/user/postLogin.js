const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  validate,
  services: { user },
  body: { email, password }
}) => {
  const constraints = require('./postLogin.validation')
  const errors = validate({ email, password }, constraints)
  if (errors) {
    return { error: true, code: 400, errors }
  }
  return user.login(email, password)
})
