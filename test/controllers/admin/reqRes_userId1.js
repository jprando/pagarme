const { expect } = require('chai')

module.exports = done => ({
  req: {
    services: {
      user: {
        getById: async function (id) {
          expect(id).to.equal(1, 'getById receive must be 1')
          return { id }
        }
      }
    },
    params: { id: 1 }
  },
  res: {
    status (code) {
      expect(code).to.be.a('number')
      expect(code).to.equal(200)
      return {
        json (response) {
          expect(response).to.be.a('object')
          expect(response).to.deep.equal({ id: 1 })
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
