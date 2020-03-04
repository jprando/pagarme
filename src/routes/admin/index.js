const controller = require('../../controllers/admin')
const authUser = require('../../server/middleware/auth')

const authUserIsAdmin = authUser.is('admin')

module.exports = {
  config (router) {
    router.use(authUserIsAdmin)

    router.get('/user/:id', controller.getUserById)
    router.get('/users', controller.getAllUsers)
    router.post('/user', controller.newUser)
    router.post('/user/:id', controller.updateUser)
    router.delete('/user/:id', controller.deleteUser)

    router.get('/customer/:id', controller.getCustomerById)
    router.get('/customers', controller.getAllCustomers)
    router.post('/customer', controller.newCustomer)
    router.post('/customer/:id', controller.updateCustomer)
    router.delete('/customer/:id', controller.deleteCustomer)
  }
}
