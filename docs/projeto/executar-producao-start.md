# Executando o projeto

## Ambiente de Homologação ou Produção

### Start

Para um cenário onde o ambiente é de Homologação ou Produção o projeto utilizará o serviço de gerenciamento de processos [`PM2`](https://pm2.keymetrics.io/), iniciando o serviço da API em modo [cluster](https://pm2.keymetrics.io/docs/usage/cluster-mode/), para cada core físico ou virtual do processador será iniciado um processo do serviço da API e irão compartilhar a mesma porta `3000` para responder as requisições.

```sh
~/pagarme/> yarn start
yarn run v1.19.1
$ pm2 start -n pagarme-backend -i max server.js
[PM2] Spawning PM2 daemon with pm2_home=~/pagarme/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting ~/pagarme/server.js in cluster_mode (0 instance)
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

**Próximo: [Projeto - Executar - Status](/docs/projeto/executar-producao-status.md)**

**Anterior: [Projeto - Executar - Depurando no VSCode](/docs/projeto/executar-vscode.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
