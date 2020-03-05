# Endpoints

## Endpoint Público

Esse é o único endpoint público, ou seja, não exige que um Token válido seja informado no cabeçalho da solicitação.

| Descrição                     | Tipo    | Endpoint        |
|-------------------------------|---------|-----------------|
| [Login](public/post_login.md)  | `POST`  | `/api/v1/login` |

[voltar para o índice](../../README.md#lista-de-conteúdo)

## Endpoint Privado

Esses enpoints são privados, ou seja, exigem que um Token válido seja incluído no cabeçalho da solicitação. Um token pode ser adquirido no endpoint [Login](#endpoint-público) descrito acima.

### Transações de Pagamento

| Descrição                                       | Tipo  | Endpoint                          |
|-------------------------------------------------|-------|-----------------------------------|
| [Criar](private/transaction/post_transaction.md)  | `POST`  | `/api/v1/private/transaction`           |
| [Listar](private/transaction/get_customer.md)     | `GET`   | `/api/v1/private/transactions/customer` |

### Recebíveis

| Descrição                               | Tipo  | Endpoint                    |
|-----------------------------------------|-------|-----------------------------|
| [Listar](private/payable/get_customer.md) | `GET` | `/api/v1/private/payables/customer` |

### Balanço

| Descrição                                           | Tipo  | Endpoint                                |
|-----------------------------------------------------|-------|-----------------------------------------|
| [Exibir](private/customer/get_balance.md)             | `GET` | `/api/v1/private/customer/balance`              |
| [Exibir por Ano](private/customer/get_balance.md)     | `GET` | `/api/v1/private/customer/balance/:year`        |
| [Exibir por Ano/Mês](private/customer/get_balance.md) | `GET` | `/api/v1/private/customer/balance/:year/:month` |

[voltar para o índice](../../README.md#lista-de-conteúdo)

## Endpoint Privado - Administração

Estes endpoints privados, além de requerer que um token válido seja passado no cabeçalho da requisição, as informações do token tem que ser referente a um usuário do tipo administrador.

### Usuário

| Descrição                                 | Tipo      | Endpoint                  |
|-------------------------------------------|-----------|---------------------------|
| [Criar](admin/post_user.md)         | `POST`    | `/api/v1/admin/user`      |
| [Exibir](admin/get_user_id.md)      | `GET`     | `/api/v1/admin/user/:id`  |
| [Alterar](admin/post_user_id.md)    | `POST`    | `/api/v1/admin/user/:id`  |
| [Deletar](admin/delete_user_id.md)  | `DELETE`  | `/api/v1/dmin/user/:id` |
| [Listar](admin/get_users.md)        | `GET`     | `/api/v1/admin/users`     |

### Cliente

| Descrição                                     | Tipo      | Endpoint                      |
|-----------------------------------------------|-----------|-------------------------------|
| [Criar](admin/post_customer.md)         | `POST`    | `/api/v1/admin/customer`      |
| [Exibir](admin/get_customer_id.md)      | `GET`     | `/api/v1/admin/customer/:id`  |
| [Alterar](admin/post_customer_id.md)    | `POST`    | `/api/v1/admin/customer/:id`  |
| [Deletar](admin/delete_customer_id.md)  | `DELETE`  | `/api/v1/dmin/customer/:id` |
| [Listar](admin/get_customers.md)        | `GET`     | `/api/v1/admin/customer`      |

**Próximo: [Banco de Dados](/docs/bancodedados.md)**

**Anterior: [Pastas](/docs/pastas.md)**

[voltar para o índice](../../README.md#lista-de-conteúdo)
