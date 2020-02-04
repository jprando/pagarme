module.exports = user => [
  process.env.SALT1 || '!e31373a6f9c2982w',
  user.ukey,
  process.env.SALT2 || '$7020153g2027d7h7',
  user.email,
  process.env.SALT3 || '@71737k3P4j64x3i0',
  user.credential,
  process.env.SALT4 || '#2632L86N46M6O75'
].join(' ')
