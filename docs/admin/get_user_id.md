# Exibir Usuário

Obtém informações completa de um usuário específico, previamente cadastro no sistema.

**URL** : `/api/v1/admin/user/:id`

**Parâmetro na URL** : `id=[integer]` onde `id` é o ID de um usuário previamente cadastrado.

**Method** : `GET`

**Requer Autenticação** : Sim

## Header

`Authorization: Bearer eyJhbGciOiJIUzI1tokendata...`

## Resposta de Sucesso

**Condição** : Se um usuário com o ID informado existir.

**Code** : 200 OK

Conteúdo de Exemplo

```json
{
  "id": 1,
  "admin": true,
  "name": "Jeudi Prando",
  "email": "jeudi@prando.dev",
  "active": true,
  "ukey": "99c05752-1515-4e30-95bf-61697299ec78",
  "lastLoginAt": "2020-02-14T02:04:29.003Z",
  "createdAt": "2020-02-14T02:01:56.641Z",
  "updatedAt": "2020-02-14T02:04:29.004Z"
}
```

> *Observe o valor de `ukey` você vai precisar dele para realizar algumas operações na API.*

## Resposta de Não Encontrado

**Condição** : Quando o ID informado não for encontrado na tabela de usuário do banco de dados do sistema.

**Code** : `404 Not Found`

Conteúdo de Exemplo

```json
{ "message": "User not found" }
```

## Resposta de Não Autorizado

**Condição** : Se o token informado na requisição não for válido ou estiver expirado.

**Code** : `401 Unauthorized`

Conteúdo de Exemplo

```text
jwt expired
```

[Voltar](/README.md#endpoints)
