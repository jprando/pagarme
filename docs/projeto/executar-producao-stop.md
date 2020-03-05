# Executando o projeto

## Ambiente de Homologação ou Produção

### Stop

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

**Próximo: [Insomnia App](/docs/insomnia.md)**

**Anterior: [Projeto - Executar - Status](/docs/projeto/executar-producao-status.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
