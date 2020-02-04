const {
  getUserById,
  getAllUsers,
  newUser,
  updateUser,
  deleteUser,

  newCustomer
} = require('./../controllers/admin')

module.exports = {
  config (router) {
    router.get('/admin/user/:id', getUserById)
    router.get('/admin/users', getAllUsers)
    router.post('/admin/user/:id', updateUser)
    router.post('/admin/user', newUser)
    router.delete('/admin/user/:id', deleteUser)

    router.post('/admin/customer', newCustomer)
  }
}
