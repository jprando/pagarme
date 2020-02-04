const { dataResponse } = require('../../utils')

module.exports = dataResponse(async ({
  validate,
  services: { user, jwt },
  body: { email, password }
}) => {
  const constraints = require('./postLogin.validation')
  const errors = validate({ email, password }, constraints)
  if (errors) {
    return { error: true, code: 400, errors }
  }
  return user.login(email, password)
    .then(tokenData => (
      (tokenData && { token: jwt.sign(tokenData) }) ||
      { code: 401, message: 'Credential invalid' }))
})
