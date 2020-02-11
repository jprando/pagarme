const { expect } = require('chai')

module.exports = done => ({
  req: {
    services: {
      user: {
        getById: async function (id) {
          expect(id).to.equal(0, 'getById receive must be')
          return { id }
        }
      }
    },
    params: { id: 0 }
  },
  res: {
    status (code) {
      expect(code).to.be.a('number')
      expect(code).to.equal(422)
      return {
        json (response) {
          expect(response).to.be.a('object')
          expect(response).to.deep.equal({
            error: true,
            message: 'User Id must be a positive number',
            errors: undefined
          })
          return {
            end () {
              done()
            }
          }
        }
      }
    }
  }
})
