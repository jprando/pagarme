module.exports = msg => {
  if (process.env.notInTestMode) {
    console.log(msg)
  }
}
