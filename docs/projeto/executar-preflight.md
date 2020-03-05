# Executando o projeto

## Preflight

O sistema identifica o ambiente de execução através da variável `NODE_ENV` e realiza uma validação dos módulos necessários para o funcionamento do sistema, as mensagens de erro são claras e poderão lhe ajudar a resolver alguma situação que possa ocorrer, fique atento as mensagens de erro como essa por exemplo:

```sh
## PREFLIGHT ERROR ##
NODE_ENV must be informed
```

```sh
## PREFLIGHT ERROR ##
NODE_ENV 'production1' informed, not is valid
```

```sh
## PREFLIGHT ERROR ##
pm2 module not found
use `yarn add pm2` to fix it
and try again
```

**Próximo: [Projeto - Ambiente de Desenvolvimento](/docs/projeto/executar-desenvolvimento.md)**

**Anterior: [Projeto - Baixar](/docs/projeto/baixar.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
