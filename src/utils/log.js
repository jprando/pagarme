module.exports = msg => {
  if (process.env.NOTIN_TEST_MODE) {
    console.log(msg)
  }
}
