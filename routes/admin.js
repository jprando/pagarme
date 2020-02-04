const {
  getAllUsers,
//   getUserById,
  newUser,
  newCustomer
} = require('./../controllers/admin')

module.exports = {
  config (router) {
    router.get('/admin/users', getAllUsers)
    /// router.get('/admin/user/:id', getUserById)
    router.post('/admin/user', newUser)
    router.post('/admin/customer', newCustomer)
  }
}
