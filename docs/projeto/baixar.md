# Baixar e preparar o projeto

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

## Outros comandos

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

**Próximo: [Projeto - Executar - Preflight](/docs/projeto/executar-preflight.md)**

**Anterior: [Banco de Dados](/docs/bancodedados.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
