const authConstraints = require('./auth.validate')
module.exports = async (req, res, next) => {
  try {
    const { validate, services: { jwt, user } } = req
    if (req && req.headers && req.headers.authorization) {
      const [tokenType, tokenData] = req.headers.authorization.split(' ')
      if (tokenType === 'Bearer') {
        req.auth = jwt.verify(tokenData)
        req.auth.ukey = await user.getUkeyByEmail(req.auth.email)
        const errors = validate(req.auth, authConstraints)
        if (errors) {
          res.status(401).send(errors).end()
          return
        } else if (req.auth && req.auth.email && req.auth.ukey) {
          next()
          return
        }
      }
    }
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      res.status(401).send(err.message || err).end()
    } else { res.status(401).end() }
  }
  res.status(401).end()
}
