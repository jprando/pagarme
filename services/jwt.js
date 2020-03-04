const jwt = require('jsonwebtoken')
const jwtSecret = process.env.JWT_SECRET || process.env.SALT || '3c8c1cfc06af43676b4eee080026e83cd3df1c29710e17df9b69f849f3094cd3'

module.exports = {
  sign (data) {
    return jwt.sign(data, jwtSecret, { issuer: 'pagarme', algorithm: 'HS256', expiresIn: '1h' })
  },
  verify (token) {
    return jwt.verify(token, jwtSecret, { issuer: 'pagarme', algorithms: ['HS256'] })
  }
}
