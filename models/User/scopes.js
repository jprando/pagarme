module.exports = {
  basic: {
    attributes: ['id', 'name', 'email']
  },
  allFields: {
    attributes: {}
  },
  withoutCredential: {
    attributes: { exclude: ['credential'] }
  },
  activeUsers: {
    where: { active: true }
  },
  inactiveUsers: {
    where: { active: false }
  },
  allUsers: {
    where: {}
  },
  ukeyOnly: {
    attributes: ['ukey']
  }
}
