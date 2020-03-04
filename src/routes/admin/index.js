const controller = require('../../controllers/admin')
const authUser = require('../../server/middleware/auth')

const authUserIsAdmin = authUser.is('admin')

module.exports = {
  config (router) {
    router.use(authUserIsAdmin)

    router.get('/admin/user/:id', controller.getUserById)
    router.get('/admin/users', controller.getAllUsers)
    router.post('/admin/user', controller.newUser)
    router.post('/admin/user/:id', controller.updateUser)
    router.delete('/admin/user/:id', controller.deleteUser)

    router.get('/admin/customer/:id', controller.getCustomerById)
    router.get('/admin/customers', controller.getAllCustomers)
    router.post('/admin/customer', controller.newCustomer)
    router.post('/admin/customer/:id', controller.updateCustomer)
    router.delete('/admin/customer/:id', controller.deleteCustomer)
  }
}
