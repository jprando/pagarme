# Banco de Dados

Este projeto utiliza o banco de dados [postgres](https://www.postgresql.org/about/) para persistir as informações do sistema

## Preparar o Banco de Dados

> Quando a API é iniciada no modo de desenvolvimento, em sua inicialização é verificado a existência do usuário com as credenciais `jeudi@prando.dev`:`1123qqwe`, se o usuário não for encontrado o sistema cria este usuário como administrador.

Você pode [instalar o banco de dados postgres localmente em sua máquina](https://www.postgresql.org/docs/12/tutorial-install.html) ou [utilizar o docker para obter um serviço do postgres](https://hub.docker.com/_/postgres) pronto para utilização na sua máquina local.

### Via Docker

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

[voltar para o índice](../README.md#lista-de-conteúdo)

## Configuração da Conexão

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

**Próximo: [Projeto - Baixar](/docs/projeto/baixar.md)**

**Anterior: [Endpoints](/docs/endpoints/README.md)**

[voltar para o índice](../README.md#lista-de-conteúdo)
