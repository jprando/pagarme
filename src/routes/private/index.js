const authUser = require('../../server/middleware/auth')

module.exports = {
  config (router) {
    router.use(authUser)

    require('./transaction').config(router)
    require('./payable').config(router)
    require('./customer').config(router)
  }
}
