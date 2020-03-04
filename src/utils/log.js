module.exports = msg => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(msg)
  }
}
