const dataResponse = require('../dataResponse')
const constraints = require('./postLogin.validation')

module.exports = dataResponse(async ({
  validate,
  services: { user, jwt },
  body: { email, password }
}) => {
  const genToken = tokenData =>
    (tokenData && { token: jwt.sign(tokenData) }) ||
    { code: 401, message: 'Credential invalid' }

  const errors = validate({ email, password }, constraints)
  if (errors) {
    return { code: 422, errors }
  }

  return user.login(email, password).then(genToken)
})
