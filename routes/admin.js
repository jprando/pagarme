const auth = require('../server/middleware/auth')
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
    router.get('/admin/user/:id', auth, getUserById)
    router.get('/admin/users', auth, getAllUsers)
    router.post('/admin/user', auth, newUser)
    router.post('/admin/user/:id', auth, updateUser)
    router.delete('/admin/user/:id', auth, deleteUser)

    router.get('/admin/customer/:id', auth, getCustomerById)
    router.get('/admin/customers', auth, getAllCustomers)
    router.post('/admin/customer', auth, newCustomer)
    router.post('/admin/customer/:id', auth, updateCustomer)
    router.delete('/admin/customer/:id', auth, deleteCustomer)
  }
}
