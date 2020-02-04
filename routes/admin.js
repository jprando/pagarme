const {
  newUser,
  newCustomer
} = require('./../controllers/admin')

module.exports = {
  config (router) {
    router.post('/admin/user', newUser)
    router.post('/admin/customer', newCustomer)
  }
}
