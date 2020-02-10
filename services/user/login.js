module.exports = async function (email, credential) {
  const {
    db: { user, toPlain },
    services: { user: userService }
  } = this

  const _user_ = await user.scope('activeUsers')
    .findOne({ where: { email } })
    .then(toPlain)

  if (_user_ && _user_.active) {
    credential = userService.generateCredentialText({ ..._user_, credential })
    const credentialMatch = await this.password.compare(credential, _user_.credential)
    if (credentialMatch) {
      return user.update({
        lastLoginAt: new Date()
      }, {
        where: { id: _user_.id },
        fields: ['lastLoginAt']
      }).then(updated => {
        const { name, email, admin } = _user_
        return updated && updated.length && updated[0] &&
        {
          name: name,
          email: email,
          admin: admin
        }
      })
    }
  }

  return false
}
