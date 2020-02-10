const {
  getUserById,
  getAllUsers,
  newUser,
  updateUser,
  deleteUser,

  getCustomerById,
  getAllCustomers,
  newCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/admin')

module.exports = {
  config (router) {
    router.get('/admin/user/:id', getUserById)
    router.get('/admin/users', getAllUsers)
    router.post('/admin/user', newUser)
    router.post('/admin/user/:id', updateUser)
    router.delete('/admin/user/:id', deleteUser)

    router.get('/admin/customer/:id', getCustomerById)
    router.get('/admin/customers', getAllCustomers)
    router.post('/admin/customer', newCustomer)
    router.post('/admin/customer/:id', updateCustomer)
    router.delete('/admin/customer/:id', deleteCustomer)
  }
}
