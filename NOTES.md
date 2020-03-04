# Anotações

Diretório base `./src`

## SERVER

### SETUP

`~\projetos\pagarme\src\server\setup.js`

Utilizando por trás de um proxy.

```js
app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1') return true // trusted IPs
  /// if (ip === '127.0.0.1' || ip === '123.123.123.123') return true // trusted IPs
  else return false
})
```

### MIDDLEWARE

`~\projetos\pagarme\src\server\middleware\index.js`

Ajudar a proteger contra acesso não autorizado via CORS.

```js
const cors = require('cors')

const corsDefaultConfigReference = {
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false,
  'optionsSuccessStatus': 204
}
app.use(cors()) /// all origins enabled
///
var corsOptions = {
  origin: 'http://example.com',
  methods: ['GET', 'POST', 'PUT', 'HEAD', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  credentials: true, Access-Control-Allow-Credentials CORS header
  optionsSuccessStatus: 200 /// default 204
}
app.use(cors(corsOptions)) /// allow only if origin for http://example.com
```
