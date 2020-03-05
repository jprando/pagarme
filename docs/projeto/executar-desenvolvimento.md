# Executando o projeto

## Ambiente de Desenvolvimento

Para servir a API no ambiente de desenvolvimento utilizaremos o [`nodemon`](https://nodemon.io/) e aproveitar a sua particularidade de observar mudanças nos arquivos do projeto e reiniciar o processo que serve a API já aplicando as novas mudanças no código fonte.

Utilize o comando `yarn dev` ou `npm run dev` para iniciar a API em modo de desenvolvimento, o endereço `http://localhost:3000/api/v1/` será a base dos enpoint no seu ambiente de desenvolvimento local.

```sh
~/pagarme/> yarn dev
yarn run v1.19.1
$ nodemon server.js
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`

[INFO] Mode DEVELOPMENT
[ OK ] Preflight
...... Database
[ DB ] pagarme-db public
[ DB ] Sync
[ OK ] Database
[ OK ] Middleware
[ OK ] Routes
[ OK ] Configuration
[ OK ] Server running http://localhost:3000/api/v1/
......
[HTTP] 2020-02-23T14:41:30.923Z GET /api/v1/ HTTP/1.1 304 - 127.0.0.1 - 3.899 ms
[HTTP] 2020-02-23T14:42:39.089Z POST /api/v1/login HTTP/1.1 401 45 127.0.0.1 - 275.264 ms

# utilize CTRL + C para interromper o processo

...... Shutting down server
[ OK ] Database close
[ OK ] Server off

~/pagarme/> _
```

**Próximo: [Projeto - Executar - Depurando no VSCode](/docs/projeto/executar-vscode.md)**

**Anterior: [Projeto - Executar - Preflight](/docs/projeto/executar-preflight.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
