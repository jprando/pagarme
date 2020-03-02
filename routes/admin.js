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

const authAdmin = auth.is('admin')

module.exports = {
  config (router) {
    router.get('/admin/user/:id', authAdmin, getUserById)
    router.get('/admin/users', authAdmin, getAllUsers)
    router.post('/admin/user', authAdmin, newUser)
    router.post('/admin/user/:id', authAdmin, updateUser)
    router.delete('/admin/user/:id', authAdmin, deleteUser)

    router.get('/admin/customer/:id', authAdmin, getCustomerById)
    router.get('/admin/customers', authAdmin, getAllCustomers)
    router.post('/admin/customer', authAdmin, newCustomer)
    router.post('/admin/customer/:id', authAdmin, updateCustomer)
    router.delete('/admin/customer/:id', authAdmin, deleteCustomer)
  }
}
