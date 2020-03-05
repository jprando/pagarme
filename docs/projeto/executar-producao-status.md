# Executando o projeto

## Ambiente de Homologação ou Produção

### Status

No ambiente de homologação e produção, para visualizar os logs de acesso a API utilize o comando

```sh
~/pagarme/> yarn status
yarn run v1.19.1
$ pm2 logs pagarme-backend
[TAILING] Tailing last 15 lines for [pagarme-backend] process (change the value with --lines option)
~/.pm2/logs/pagarme-backend-error.log last 15 lines:
~/.pm2/logs/pagarme-backend-out.log last 15 lines:
0|pagarme- |   ...... Middleware
0|pagarme- |   ...... Routes
0|pagarme- |   ...... Configuration
  [ OK ] Server running http://localhost:3000
...
0|pagarme- |   ...... Middleware
0|pagarme- |   ...... Routes
0|pagarme- |   ...... Configuration
  [ OK ] Server running http://localhost:3000

11|pagarme-backend  |   [ 2020-01-30T20:45:50.383Z ] GET / HTTP/1.1 304 - ::1 - 2.004 ms
11|pagarme-backend  |   [ 2020-01-30T20:45:51.121Z ] GET / HTTP/1.1 304 - ::1 - 0.182 ms
11|pagarme-backend  |   [ 2020-01-30T20:45:51.345Z ] GET / HTTP/1.1 304 - ::1 - 0.166 ms

# utilize CTRL + C para interromper o processo

~/pagarme/> _
```

**Próximo: [Projeto - Executar - Stop](/docs/projeto/executar-producao-stop.md)**

**Anterior: [Projeto - Executar - Start](/docs/projeto/executar-producao-start.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
