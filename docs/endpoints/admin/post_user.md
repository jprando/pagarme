# Criar Usuário

Cria um novo usuário no sistema

**URL** : `/api/v1/admin/user`

**Method** : `POST`

**Requer Autenticação** : Sim

## Header

`Authorization: Bearer eyJhbGciOiJIUzI1tokendata...`

## Conteúdo da requisição

Informações obrigatórias:

- nome do usuário
- email válido do usuário
- credencial do usuário com mais de 6 caracteres

```json
{
  "name":"teste",
  "email":"teste@teste.com",
  "credential": "123321",
  "admin": false
}
```

## Resposta de Sucesso

**Condição** : Se os dados do usuário forem válidos e não forem duplicados.

**Code** : `201 Created`

Conteúdo de exemplo da resposta

```json
{
  "admin": false,
  "active": true,
  "ukey": "99c05752-1515-4e30-95bf-61697299ec78",
  "id": 1,
  "name": "teste",
  "email": "teste@teste.com",
  "updatedAt": "2020-02-14T02:26:56.864Z",
  "createdAt": "2020-02-14T02:26:56.864Z"
}
```

> *Observe o campo `ukey` gerado automaticamente pelo sistema, você vai precisar dele para realizar algumas operações na API.*

## Resposta de Erro 422

**Condição** : Quando alguma informação do usuário não é válida ou é duplicado.

**Code** : `422 Unprocessable Entity`

```json
{
  "error": true,
  "message": "There is already a user with this email"
}
```

## Resposta de Não Autorizado

**Condição** : Se o token informado na requisição não for válido ou estiver expirado.

**Code** : `401 Unauthorized`

Conteúdo de Exemplo

```text
jwt expired
```

**Anterior: [Endpoint Privado - Administração - Usuário](../README.md#usuário)**

[Endpoint Privado - Administração](../README.md#endpoint-privado---administração)

[Endpoint Privado](../README.md#endpoint-privado)

[Enpoints](../README.md)

[voltar para o índice](../../../README.md)
