const { postLogin } = require('../controllers/user')

module.exports = {
  config (router) {
    router.post('/login', postLogin)
  }
}
