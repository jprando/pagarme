require('dotenv').config({ path: '.env.test' })

process.env.NODE_ENV = 'test'

const chai = require('chai')
const admin = require('../../../src/controllers/admin')

const expect = chai.expect

describe('CONTROLLER ADMIN', () => {
  describe('USER', () => {

    it('it should be a Object with 10 functions', done => {
      expect(admin).to.be.an('object')
      expect(admin).to.have.all.keys([
        'getUserById',
        'getAllUsers',
        'newUser',
        'updateUser',
        'deleteUser',
        'getCustomerById',
        'getAllCustomers',
        'newCustomer',
        'updateCustomer',
        'deleteCustomer'
      ])
      done()
    })

    it('it should be a admin.user.getUserById function', done => {
      expect(admin.getUserById).to.be
        .a('function', 'admin.getUserById should be a function')
      expect(admin.getUserById.length).to.be
        .equal(2, 'admin.getUserById should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.getUserById function => promise { id: 1 }', done => {
      const _http = require('./reqRes_userId1')(done)
      expect(admin.getUserById(_http.req, _http.res)).to.be
        .a('promise', 'running admin.getUserById should return promise { id: 1 }')
    })

    it('it should be a admin.user.getUserById function => promise User not found', done => {
      const _http = require('./reqRes_userNotFound')(done)
      expect(admin.getUserById(_http.req, _http.res)).to.be
        .a('promise', 'running admin.getUserById should return promise User not found  ')
    })

    it('it should be a admin.user.getUserById function => error user id invalid', done => {
      const _http = require('./reqRes_userId0')(done)
      expect(admin.getUserById(_http.req, _http.res)).to.be
        .a('promise', 'running admin.getUserById should return promise User not found  ')
    })

    it('it should be a admin.user.getAllUsers function', done => {
      expect(admin.getAllUsers).to.be
        .a('function', 'admin.getAllUsers should be a function')
      expect(admin.getAllUsers.length).to.be
        .equal(2, 'admin.getAllUsers should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.newUser function', done => {
      expect(admin.newUser).to.be
        .a('function', 'admin.newUser should be a function')
      expect(admin.newUser.length).to.be
        .equal(2, 'admin.newUser should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.updateUser function', done => {
      expect(admin.updateUser).to.be
        .a('function', 'admin.updateUser should be a function')
      expect(admin.updateUser.length).to.be
        .equal(2, 'admin.updateUser should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.deleteUser function', done => {
      expect(admin.deleteUser).to.be
        .a('function', 'admin.deleteUser should be a function')
      expect(admin.deleteUser.length).to.be
        .equal(2, 'admin.deleteUser should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.getCustomerById function', done => {
      expect(admin.getCustomerById).to.be
        .a('function', 'admin.getCustomerById should be a function')
      expect(admin.getCustomerById.length).to.be
        .equal(2, 'admin.getCustomerById should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.getAllCustomers function', done => {
      expect(admin.getAllCustomers).to.be
        .a('function', 'admin.getAllCustomers should be a function')
      expect(admin.getAllCustomers.length).to.be
        .equal(2, 'admin.getAllCustomers should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.newCustomer function', done => {
      expect(admin.newCustomer).to.be
        .a('function', 'admin.newCustomer should be a function')
      expect(admin.newCustomer.length).to.be
        .equal(2, 'admin.newCustomer should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.updateCustomer function', done => {
      expect(admin.updateCustomer).to.be
        .a('function', 'admin.updateCustomer should be a function')
      expect(admin.updateCustomer.length).to.be
        .equal(2, 'admin.updateCustomer should receive 2 parameters (req, res)')
      done()
    })

    it('it should be a admin.user.deleteCustomer function', done => {
      expect(admin.deleteCustomer).to.be
        .a('function', 'admin.deleteCustomer should be a function')
      expect(admin.deleteCustomer.length).to.be
        .equal(2, 'admin.deleteCustomer should receive 2 parameters (req, res)')
      done()
    })

  })
})