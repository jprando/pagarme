
[![Build Status](https://drone.jeudi.dev/api/badges/jeudi/pagarme/status.svg)](https://drone.jeudi.dev/jeudi/pagarme)

# Desafio Tecnico Pagarme

[informacoes do desafio](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend)

## Baixar e preparar o projeto

Para preparar e utilizar este projeto você deverá ter instalado  o [node](https://nodejs.org/en/download/) e o [yarn](https://yarnpkg.com/getting-started/install) no seu ambiente.

Para baixar os arquivos do projeto para a sua máquina local utilize os comandos abaixo.

```sh
# ir para a pasta home do usuario
# ou a pasta que você preferir armazenar os arquivos do projeto
~/downloads/mystuff> cd

# baixar os arquivos do projeto para a maquina local
~/> git clone https://git.jeudi.dev/jeudi/pagarme.git

# entrar na pasta do projeto
~/> cd pagarme

# instalar as dependencias do projeto
~/pagarme/> yarn # ou npm install
```

## Iniciando o projeto

### Ambiente de Desenvolvimento

Para servir a API no ambiente de desenvolvimento utilizaremos o [`nodemon`](https://nodemon.io/) e aproveitar a sua particularidade de observar mudanças nos arquivos do projeto e reiniciar o processo que serve a API já aplicando as novas mudanças no código fonte.

```sh
~/pagarme/> yarn dev
yarn run v1.19.1
$ nodemon index.js
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
  ...... Middleware
  ...... Routes
  ...... Configuration
  [ OK ] Server running http://localhost:3000
  [ 2020-01-30T20:39:52.672Z ] GET / HTTP/1.1 200 13 ::1 - 1.923 ms
  [ 2020-01-30T20:39:52.696Z ] GET /favicon.ico HTTP/1.1 404 150 ::1 - 0.912 ms
  [ 2020-01-30T20:39:55.283Z ] GET / HTTP/1.1 200 13 ::1 - 0.145 ms
  [ 2020-01-30T20:39:55.455Z ] GET / HTTP/1.1 304 - ::1 - 0.320 ms
  [ 2020-01-30T20:39:57.394Z ] GET / HTTP/1.1 304 - ::1 - 0.160 ms
  [ 2020-01-30T20:39:58.483Z ] GET / HTTP/1.1 200 13 ::1 - 0.122 ms
  [ 2020-01-30T20:39:58.508Z ] GET /favicon.ico HTTP/1.1 404 150 ::1 - 0.194 ms
  [ 2020-01-30T20:40:00.074Z ] GET / HTTP/1.1 200 13 ::1 - 0.137 ms
  [ 2020-01-30T20:40:00.102Z ] GET /favicon.ico HTTP/1.1 404 150 ::1 - 0.172 ms

# utilize CTRL + C para interromper o processo

  ...... Shutting down server
  [ OK ] Server off

~/pagarme/> _
```

### Ambiente de Homologação ou Produção

#### Start

Para um cenário onde o ambiente é de Homologação ou Produção o projeto utilizará o serviço de gerenciamento de processos [`PM2`](https://pm2.keymetrics.io/), iniciando o serviço da API em modo [cluster](https://pm2.keymetrics.io/docs/usage/cluster-mode/), para cada core físico ou virtual do processador será iniciado um processo do serviço da API e irão compartilhar a mesma porta `3000` para responder as requisições.

```sh
~/pagarme/> yarn start
yarn run v1.19.1
$ pm2 start -n pagarme-backend -i max index.js
[PM2] Spawning PM2 daemon with pm2_home=~/pagarme/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting ~/pagarme/index.js in cluster_mode (0 instance)
[PM2] Done.
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ rs   │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ pagarme-backend    │ cluster  │ 0    │ online    │ 0%       │ 36.7mb   │
│ 1  │ pagarme-backend    │ cluster  │ 0    │ online    │ 0%       │ 36.5mb   │
...
│ 10 │ pagarme-backend    │ cluster  │ 0    │ online    │ 0%       │ 36.2mb   │
│ 11 │ pagarme-backend    │ cluster  │ 0    │ online    │ 0%       │ 34.3mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
Done in 4.87s.

~/pagarme/> _
```

#### Status

No ambiente de homologação e produção, para visualizar os logs de acesso a API utilize o comando

```sh
~/pagarme/> yarn status
yarn run v1.19.1
$ pm2 logs pagarme-backend
[TAILING] Tailing last 15 lines for [pagarme-backend] process (change the value with --lines option)
~/.pm2/logs/pagarme-backend-error.log last 15 lines:
~/.pm2/logs/pagarme-backend-out.log last 15 lines:
0|pagarme- |   ...... Routes
0|pagarme- |   ...... Configuration
  [ OK ] Server running http://localhost:3000
0|pagarme- |   ...... Middleware
0|pagarme- |   ...... Routes
0|pagarme- |   ...... Configuration
  [ OK ] Server running http://localhost:3000
0|pagarme- |   ...... Middleware
0|pagarme- |   ...... Routes
0|pagarme- |   ...... Configuration
  [ OK ] Server running http://localhost:3000
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

#### Stop

Para finalizar os processos que estão servindo a API em modo cluster, utilize o comando

```sh
~/pagarme/> yarn stop
yarn run v1.19.1
$ pm2 stop all && pm2 delete all && pm2 kill
[PM2] Applying action stopProcessId on app [all]
(ids: [ 0,1,...,10,11 ])
[PM2] [pagarme-backend](1) ✓
[PM2] [pagarme-backend](0) ✓
...
[PM2] [pagarme-backend](10) ✓
[PM2] [pagarme-backend](11) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ rs   │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ pagarme-backend    │ cluster  │ 0    │ stopped   │ 0%       │ 0b       │
│ 1  │ pagarme-backend    │ cluster  │ 0    │ stopped   │ 0%       │ 0b       │
...
│ 10 │ pagarme-backend    │ cluster  │ 0    │ stopped   │ 0%       │ 0b       │
│ 11 │ pagarme-backend    │ cluster  │ 0    │ stopped   │ 0%       │ 0b       │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2] Applying action deleteProcessId on app [all]
(ids: [ 0,1,...,10,11 ])
[PM2] [pagarme-backend](0) ✓
[PM2] [pagarme-backend](1) ✓
...
[PM2] [pagarme-backend](10) ✓
[PM2] [pagarme-backend](11) ✓
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ rs   │ status    │ cpu      │ memory   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
[PM2] [v] Modules Stopped
[PM2][WARN] No process found
[PM2] [v] All Applications Stopped
[PM2] [v] PM2 Daemon Stopped
Done in 4.22s.

~/pagarme/> _
```
