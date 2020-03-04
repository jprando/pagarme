module.exports = msg => {
  if (!process.env.TEST_MODE) {
    console.log(msg)
  }
}
