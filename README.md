# 🏆 Desafio Técnico Pagarme 👨‍💻

[![Build Status](https://drone.jeudi.dev/api/badges/jeudi/pagarme/status.svg)](https://drone.jeudi.dev/jeudi/pagarme)

[informações do desafio](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend)

## Apoiadores

[![foto do github de Bruno Flegler Dal'Col](https://avatars0.githubusercontent.com/u/18169587?s=60&v=4) Bruno Flegler Dal'Col](https://github.com/brunoflegler)  
[![foto do github de João Maia](https://avatars1.githubusercontent.com/u/296619?s=60&v=4) João Maia](https://github.com/jvrmaia)

## Lista de conteúdo

- [Informações](#informações)
- [UKey](#UKey)
- [Pastas](#pastas)
- [Endpoints](#endpoints)
  - [Endpoint Público](#endpoint-público)
  - [Endpoint Privado](#endpoint-privado)
    - [Transações de Pagamento](#transações-de-pagamento)
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

[voltar para o índice](#lista-de-conteúdo)

### UKey

UKey é uma chave geral única que liga Usuário + Cliente + Transação + Recebíveis.

Quando um usuário é criado, o sistema irá criar a `ukey` do usuário, que deverá ser utilizado ao criar um cliente e transações de pagamento.

Quando for criar um Cliente, a `ukey` de um usuário ativo deverá ser informada.

Quando for criar uma transação de pagamento a `ukey` do Usuário/Cliente ativo deverá ser informada.

A relação Usuário e Cliente é 1 para 1, ou seja, somente um cliente por usuário será permitido.

A intenção da existência da `ukey` seria poder trabalhar com computação distribuída no processamento e armazenamento dos dados, que eu acredito não ser pequeno e a existências de muitas requisições por segundo simultâneas deve exigir uma organização, distribuição e utilização dos dados bastante diferenciado do que estamos acostumados em sistemas transacionais mais simples existentes por ai, onde os relacionamentos são feito através de campos Ids do tipo numérico e auto-incremental.

[voltar para o índice](#lista-de-conteúdo)

### Pastas

**CONTROLLERS**  
Faz o controle entre a requisição no endpoint da API e coordena as chamadas aos serviços para atender a requisição feita, responsável por controlar e a dar a resposta correta de acordo com o estado da aplicação ao executar os serviços.

**DB**  
Preparar, gerenciar e utilizar dados de um banco de dados.

**DOCS**  
Documentação detalhada dos Endpoints da API.

**MODELS**  
Configura os aspectos referente a modelagem de dados do sistema como: tabelas, campos, tipos de dados, validações, informação para a criação dos objetos do banco de dados.

**ROUTERS**  
Configurar os endpoints da API.

**SERVER**  
Configuração e inicialização do serviço http.

**SERVICES**  
Implementação das regras de negocio do sistema.

**TEST**  
Implementação dos testes unitários.

**UTILS**  
Funções uteis a várias partes do sistema

[voltar para o índice](#lista-de-conteúdo)

## Endpoints

### Endpoint Público

Esse é o único enpoint público, ou seja, não exige que um Token válido seja informado no cabeçalho da solicitação.

| Descrição                     | Tipo    | Endpoint        |
|-------------------------------|---------|-----------------|
| [Login](/docs/public/post_login.md)  | `POST`  | `/api/v1/login` |

[voltar para o índice](#lista-de-conteúdo)

### Endpoint Privado

Esses enpoints são privados, ou seja, exigem que um Token válido seja incluído no cabeçalho da solicitação. Um token pode ser adquirido no endpoint [Login](#endpoint-público) descrito acima.

#### Transações de Pagamento

| Descrição                                       | Tipo  | Endpoint                          |
|-------------------------------------------------|-------|-----------------------------------|
| [Criar](/docs/private/transaction/post_transaction.md)  | `POST`  | `/api/v1/private/transaction`           |
| [Listar](/docs/private/transaction/get_customer.md)     | `GET`   | `/api/v1/private/transactions/customer` |

#### Recebíveis

| Descrição                               | Tipo  | Endpoint                    |
|-----------------------------------------|-------|-----------------------------|
| [Listar](/docs/private/payable/get_customer.md) | `GET` | `/api/v1/private/payables/customer` |

#### Balanço

| Descrição                                           | Tipo  | Endpoint                                |
|-----------------------------------------------------|-------|-----------------------------------------|
| [Exibir](/docs/private/customer/get_balance.md)             | `GET` | `/api/v1/private/customer/balance`              |
| [Exibir por Ano](/docs/private/customer/get_balance.md)     | `GET` | `/api/v1/private/customer/balance/:year`        |
| [Exibir por Ano/Mês](/docs/private/customer/get_balance.md) | `GET` | `/api/v1/private/customer/balance/:year/:month` |

### Endpoint Privado - Administração

Estes endpoints privados, além de requerer que um token válido seja passado no cabeçalho da requisição, as informações do token tem que ser referente a um usuário do tipo administrador.

#### Usuário

| Descrição                                 | Tipo      | Endpoint                  |
|-------------------------------------------|-----------|---------------------------|
| [Criar](/docs/admin/post_user.md)         | `POST`    | `/api/v1/admin/user`      |
| [Exibir](/docs/admin/get_user_id.md)      | `GET`     | `/api/v1/admin/user/:id`  |
| [Alterar](/docs/admin/post_user_id.md)    | `POST`    | `/api/v1/admin/user/:id`  |
| [Deletar](/docs/admin/delete_user_id.md)  | `DELETE`  | `/api/v1/dmin/user/:id` |
| [Listar](/docs/admin/get_users.md)        | `GET`     | `/api/v1/admin/users`     |

#### Cliente

| Descrição                                     | Tipo      | Endpoint                      |
|-----------------------------------------------|-----------|-------------------------------|
| [Criar](/docs/admin/post_customer.md)         | `POST`    | `/api/v1/admin/customer`      |
| [Exibir](/docs/admin/get_customer_id.md)      | `GET`     | `/api/v1/admin/customer/:id`  |
| [Alterar](/docs/admin/post_customer_id.md)    | `POST`    | `/api/v1/admin/customer/:id`  |
| [Deletar](/docs/admin/delete_customer_id.md)  | `DELETE`  | `/api/v1/dmin/customer/:id` |
| [Listar](/docs/admin/get_customers.md)        | `GET`     | `/api/v1/admin/customer`      |

[voltar para o índice](#lista-de-conteúdo)

## Banco de Dados

Este projeto utiliza o banco de dados [postgres](https://www.postgresql.org/about/) para persistir as informações do sistema

### Preparar o Banco de Dados

> Quando a API é iniciada no modo de desenvolvimento, em sua inicialização é verificado a existência do usuário com as credenciais `jeudi@prando.dev`:`1123qqwe`, se o usuário não for encontrado o sistema cria este usuário como administrador.

Você pode [instalar o banco de dados postgres localmente em sua máquina](https://www.postgresql.org/docs/12/tutorial-install.html) ou [utilizar o docker para obter um serviço do postgres](https://hub.docker.com/_/postgres) pronto para utilização na sua máquina local.

#### Via Docker

Esta é a opção mais rápida e posso dizer também simples para ter um serviço de banco de dados postgres rodando em sua máquina para servir a API da solução implementada.

Tendo o [docker instalado](https://get.docker.com/), configurado , executando normal e corretamente em sua máquina, o comando abaixo irá preparar e disponibilizar prontamente um serviço do banco de dados postgres:

```sh
docker run --name pgsql-db-srv \
    -e POSTGRES_PASSWORD=pagarmesecrets \
    -p 5432:5432 \
postgres
```

Com o comando acima você terá o postgres pronto para utilização na porta `5432`, usuário `postgres` e senha `pagarmesecrets`.

Referente a porta, mude caso precise ou se preferir outra, para utilizar outra porta por exemplo a porta `5454` utilize `-p 5454:5432`

[voltar para o índice](#lista-de-conteúdo)

### Configuração da Conexão

Para configurar o sistema de modo que o mesmo conecte-se a um banco de dados preparado por ti, faça uma cópia do arquivo `.env.example` para um novo arquivo com o nome `.env`, abra o arquivo e informe corretamente as informações necessárias para realizar a conexão com o seu serviço de banco de dados postgres.

Para informar a configuração da conexão com o banco de dados para a execução dos testes, copie o arquivo de exemplo `.env.example` para um novo arquivo com o nome `.env.test` e preencha-o corretamente.

Observando as opções contidas no arquivo `.env`, você tem a opção de utilizar variáveis de ambiente com o mesmo nome e com o valor necessário para iniciar a conexão com o banco de dados postgres.

Dentro do arquivo `.env` você encontrará as seguintes opções:

- **PG_HOST** define o nome ou o ip da máquina na qual um serviço do postgres esta rodando e esta pronto para a utilização.

- **PG_PORT** define a porta que o serviço do postgres esta aguardando conexões.

- **PG_USER** define o nome do usuário que o sistema utilizará para estabelecer conexão com o serviço de dados.

- **PG_PASS** define a senha para estabelecer a conexão com o serviço do postgres.

- **PG_DATABASE** define o nome do banco de dados que o sistema utilizará para persistir as informações.

- **PG_SCHEMA** define qual `schema` do banco de dados postgres que o sistema se conectará, deverá ser utilizado por padrão.

- **SALT** define um texto aleatório a ser colocado junto com a senha do usuário quando for gerar a senha, criptografada com o `bcrypt`, a ser guardada no banco de dados.

- **JWT_SECRET** define um texto aleatório a ser utilizado como chave de criptografia dos [tokens jwt](https://jwt.io/introduction/) de sessão da API.

[voltar para o índice](#lista-de-conteúdo)

## Baixar e preparar o projeto

Para preparar e utilizar este projeto você deverá ter instalado, e funcionando corretamente, os seguintes programas no seu ambiente.

- [git](https://git-scm.com/)
- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/getting-started/install)
- [docker](https://docs.docker.com/install/)

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

### Outros comandos

Você tem a sua disposição comandos pré-estabelecidos para utilizar em alguns casos que venha precisar

Para gerar a estrutura no banco de dados informado no arquivo `.env` utilize o comando

```sh
yarn db:clean:sync
```

Este comando ira apagar qualquer objeto criado anteriormente, limpando o banco de dados da conexão informada no arquivo `.env`.

```sh
yarn db:sync
```

Este comando cria, sem tentar apagar antes, os objetos que ainda não existem no banco de dados e são necessário para o funcionamento do sistema, se você acabou de executar o comando anterior `yarn db:clean:sync` não é necessário executar este comando.

```sh
yarn test
```

Este comando, limpa o banco de dado, cria a estrutura necessária para o funcionamento do sistema no banco de dados e inicializa os testes unitários informados e armazenados na pasta `test`.

```sh
yarn mocha
```

Este comando executa os testes implementados e armazenados na pasta `test`, sem recriar e limpar o banco de dados.

[voltar para o índice](#lista-de-conteúdo)

## Executando o projeto

### Preflight

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

[voltar para o índice](#lista-de-conteúdo)

### Ambiente de Desenvolvimento

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

[voltar para o índice](#lista-de-conteúdo)

#### Depurando no VSCode

Para depurar esta aplicação utilizando o [vscode](https://code.visualstudio.com/) como IDE, crie uma pasta chamada `.vscode` e dentro dessa pasta crie um arquivo com o nome `launch.json` com o seguinte conteúdo:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Development Mode",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "program": "${workspaceFolder}/server.js",
      "skipFiles": [
          "<node_internals>/**"
      ],
      "env": {
          "NODE_ENV": "development"
      }
    }
  ]
}
```

Em seguida vá na aba `Run and Debug` do app vscode, escolha a opção `Development Mode` e click no botão `Start Debugging` ( que tem um ícone de play verde ) ou pressione **F5**.

A API será carregada e na aba `DEBUG CONSOLE` você verá a saída do sistema e poderá utilizar `breakpoints` nos arquivos `.js` do projeto para depurar a execução da API em um determinado ponto e entender melhor o que esta acontecendo no seu ambiente de desenvolvimento local.

Algumas teclas de atalhos, do `vscode`, úteis para a depuração:

| Atalho            | Descrição             |
|-------------------|-----------------------|
| **F5**            | inicia a depuração.   |
| **SHIFT+F5**      | para a depuração.     |
| **CTRL+SHIFT+F5** | reinicia a depuração. |

[voltar para o índice](#lista-de-conteúdo)

### Ambiente de Homologação ou Produção

#### Start

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

[voltar para o índice](#lista-de-conteúdo)

#### Status

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

[voltar para o índice](#lista-de-conteúdo)

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

[voltar para o índice](#lista-de-conteúdo)

## Insomnia App

Na raiz do projeto há um arquivo chamado `insomnia_config.json` que tem algumas configurações de chamadas a API implementada que você importar no [app Insomnia](https://insomnia.rest/), ele é muito parecido com o postman, estes apps servem para testar manualmente os endpoints da API.

[voltar para o índice](#lista-de-conteúdo)

## Libs e Frameworks

Principais Libs e Frameworks utilizados no projeto.

- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#readme)
- [cors](https://github.com/expressjs/cors)
- [dotenv](dotenv)
- [ExpressJs](http://expressjs.com/)
- [helmet](https://helmetjs.github.io/)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
- [morgan](https://github.com/expressjs/morgan#readme)
- [nodemon](https://nodemon.io/)
- [PM2](https://pm2.keymetrics.io/)
- [Sequelize](https://sequelize.org/v5/index.html)
- [Validate.js](https://validatejs.org/#validate-js)

[voltar para o índice](#lista-de-conteúdo)

## Considerações Finais

Foi uma experiência bem interessante implementar essa solução sem a ajuda dos frameworks e libs de alto nível que temos no ecossistema javascript, tive que sair da minha zona de conforto e colocar a mão na massa, estou satisfeito com o que estou entregando, consegui colocar um pouco da minha essência nessa solução.

Em alguns pontos algumas coisas poderiam ser melhor como a organização e a implementação de testes, como eu já havia pedido mais tempo 2 vezes, decidi entregar assim mesmo, talvez um pouco de ansiedade, pressa, me fizeram não querer adiar novamente essa entrega.

Se eu tivesse mais tempo eu investiria em:

- Configurar o Webpack
- Implementar mais testes
- Faria uma imagem no docker
- Utilizar o Swagger
- Refatorar o projeto mais uma vez

Acredito não ter deixado nada para trás e estou ansioso para a próxima etapa, ate+.

[voltar para o índice](#lista-de-conteúdo)
