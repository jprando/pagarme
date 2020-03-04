module.exports = async (db) => {
  if (process.env.NODE_ENV === 'development') {
    await db.models.user.scope('allUsers').findOrCreate({
      where: { email: 'jeudi@prando.dev' },
      defaults: {
        admin: true,
        name: 'Jeudi Prando',
        email: 'jeudi@prando.dev',
        ukey: '2f710682-aee9-4237-ad71-f7f471be91ad',
        credential: '1123qqwe'
      }
    })
  }
}
