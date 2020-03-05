# 🏆 Desafio Técnico Pagarme 👨‍💻

[![Build Status](https://drone.jeudi.dev/api/badges/jeudi/pagarme/status.svg)](https://drone.jeudi.dev/jeudi/pagarme)

[informações do desafio](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend)

## Apoiadores

[![foto do github de Bruno Flegler Dal'Col](https://avatars0.githubusercontent.com/u/18169587?s=60&v=4) Bruno Flegler Dal'Col](https://github.com/brunoflegler)  
[![foto do github de João Maia](https://avatars1.githubusercontent.com/u/296619?s=60&v=4) João Maia](https://github.com/jvrmaia)

## Lista de conteúdo

- [Informações](/README.md#informações)
- [UKey](/docs/ukey.md)
- [Pastas](/docs/pastas.md)
- [Endpoints](/docs/endpoints/README.md)
  - [Endpoint Público](/docs/endpoints/README.md#endpoint-público)
  - [Endpoint Privado](/docs/endpoints/README.md#endpoint-privado)
    - [Transações de Pagamento](/docs/endpoints/README.md#transações-de-pagamento)
    - [Recebíveis](#recebíveis)
    - [Balanço](#balanço)
  - [Endpoint Privado - Administração](#endpoint-privado---administração)
    - [Usuário](#usuário)
    - [Cliente](#cliente)
- [Banco de Dados](#banco-de-dados)
  - [Preparar o banco de dados](#preparar-o-banco-de-dados)
    - [Via Docker](#via-docker)
  - [Configuração da Conexão](#configuração-da-conexão)
- [Baixar e preparar o projeto](#baixar-e-preparar-o-projeto)
  - [Outros comandos](#outros-comandos)
- [Executar o projeto](#executando-o-projeto)
  - [Preflight](#preflight)
  - [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
    - [Depurando no VSCode](#depurando-no-vsCode)
  - [Ambiente de Homologação ou Produção](#ambiente-de-homologação-ou-produção)
    - [Start](#start)
    - [Status](#status)
    - [Stop](#stop)
- [Insomnia App](#insomnia-app)
- [Libs e Frameworks](#libs-e-frameworks)
- [Considerações Finais](#considerações-finais)

---

## Informações

Olá me chamo **Jeudi Prando** e desenvolvi essa solução para o desafio da pagarme, trabalho com analise e desenvolvimento de software desde o meu primeiro emprego/estágio e desde então, nos últimos 14 anos, é só o que eu tenho feito e me especializado, nos últimos 3 anos tenho me dedicado totalmente ao javascript, em compreender e a dominar os conceitos do mesmo e a resolver problemas com javascript.

Minha intenção com esta solução é demonstrar que tenho domínio sobre a linguagem javascript, por isso utilizei frameworks e libs mais simples para que me permitisse ter oportunidade de fazer na mão o que a maioria dos frameworks entregam pronto e mastigado, eu não queria mostrar que sei utilizar o framework X ou Y e sim o que eu sei sobre javascript.

Muito do que foi feito aqui, poderia ser feito melhor ou de outro jeito, porém eu me limitei ao propósito, tempo e ao assunto principal do desafio, eu poderia ficar polindo o projeto por muitos dias, mas a realidade no dia a dia é que em algum momento temos que entregar o que temos pronto.

O projeto adota o estilo [standard](https://standardjs.com/) no código fonte implementado.

Os [commits são assinados digitalmente](https://help.github.com/pt/github/authenticating-to-github/signing-commits) com a minha chave GPG: `1482A61AFF211B2C`.

Este projeto esta replicado em dois repositórios:

- [Github](https://github.com/jprando/pagarme)
- [Gitea](git.jeudi.dev/jeudi/pagarme)

No meu servidor [Gitea](https://git.jeudi.dev) está integrado um simples CI/CD, utilizando o [Drone.io](https://drone.io/) para baixar os fontes a cada commit e realizar os testes.

O histórico das compilações deste projeto, do pequeno CI/CD integrado ao repositório, você pode ver acessando [drone.jeudi.dev](https://drone.jeudi.dev/jeudi/pagarme)

**Próximo: [UKey](/docs/ukey.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
