const bcrypt = require('bcrypt')

module.exports = {
  // compare: bcrypt.compare,
  compare: async (value, hash) => bcrypt.compare(value, hash),
  generate: async (value) => bcrypt.hash(value, 11)
}
