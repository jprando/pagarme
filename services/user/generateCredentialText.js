module.exports = ({ ukey, credential }) => [
  ukey,
  credential,
  process.env.SALT || '!e31373a6f9c2982w'
].join(' ')
