const bcrypt = require('bcrypt')

module.exports = {
  compare: async (value, hash) => bcrypt.compare(value, hash),
  gnerate: async (value) => bcrypt.hash(value, 11)
}
