const controller = require('../../controllers/user')

module.exports = {
  config (router) {
    router.post('/login', controller.postLogin)
  }
}
