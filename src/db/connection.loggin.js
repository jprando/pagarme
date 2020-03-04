module.exports = (msg, time, _db) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`[ DB ] ${new Date().toISOString()} ${_db.type} ${time}ms ${msg}`)
  }
}
