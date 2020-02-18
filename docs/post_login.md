# Login

Para realizar o login do usuário e recuperar o token de acesso  

**URL** : `/api/v1/login`

**Method** : `POST`

**Requer Autenticação** : Não

**Dados de exemplo da requisição**

```json
{
	"email": "jeudi@prando.dev",
	"password": "1123qqwe"
}
```

## Resposta de Sucesso

**Code** : `200 OK`

**Conteúdo de Exemplo**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmV1ZGkgUHJhbmRvIiwiZW1haWwiOiJqZXVkaUBwcmFuZG8uZGV2IiwiYWRtaW4iOnRydWUsImlhdCI6MTU4MTY0NTg2OSwiZXhwIjoxNTgxNjQ5NDY5LCJpc3MiOiJwYWdhcm1lIn0.sOEysdsILEX7mTKfWdhV0xSdclmV9n9EY9NWbdEZGJ0"
}
```

## Resposta de Erro 401

**Condição** : Se as credenciais informadas estão em um formato correto e não forem validas.

**Code** : `401 Unauthorized`

**Conteúdo** : 

```json
{
  "error": true,
  "message": "Credential invalid"
}
```

## Resposta de Erro 422

**Condição** : Se as credenciais informadas não estiverem em um formato correto, um email inválido e/ou uma senha com menos de 6 caracteres.

**Code** : `422 Unprocessable Entity`

**Conteúdo** : 

```json
{
  "error": true,
  "errors": {
    "email": [
      "Email is not a valid email"
    ],
    "password": [
      "Password is too short (minimum is 6 characters)"
    ]
  }
}
```

[Voltar](/README.md)
