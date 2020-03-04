require('dotenv').config({ path: '.env.test' })

process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../../server')
const { user } = require('../../../../src/services')

const expect = chai.expect
chai.use(chaiHttp)
user.db = server.db.models

describe('USER', () => {
  describe('Empty table', () => {
    describe('GET /admin/user/1', () => {
      before(done => {
        user.deleteAll().then(done)
      })
      it('it should not have Errors', (done) => {
        chai.request(server)
          .get('/admin/user/1')
          .end((err, res) => {
            expect(err).to.be.a('null', 'request error must be null')
            expect(err).to.not.be.an('undefine', 'request error must be null')
            expect(err).to.not.be.an('error', 'request error must be null')
            done()
          })
      })
      it('it should GET Status Code 404', (done) => {
        chai.request(server)
          .get('/admin/user/1')
          .end((err, res) => {
            expect(res).to.have.status(404, 'request status code must be 404')
            done()
          })
      })
      it('it should have Empty Request Body', (done) => {
        chai.request(server)
          .get('/admin/user/1')
          .end((err, res) => {
            expect(res.body).to.not.be.null
            expect(res.body).to.be.an('object', 'request body must exists')
            expect(res.body).to.not.have.property('message', 'User not found')
            done()
          })
      })
    })
  })
})
