# Criar Transação de Pagamento

Cria uma nova transação de pagamento

**URL**: `/api/v1/private/transaction`

**Method**: `POST`

**Requer Autenticação** : Sim

## Header

`Authorization: Bearer eyJhbGciOiJIUzI1tokendata...`

## Conteúdo da Requisição

### paymentMethod

A informação `paymentMethod`, referente ao método de pagamento, somente aceita dois valores:

- `debit_card` pagamento com cartão de débito
- `credit_card` pagamento com cartão de crédito

### cardExpiration

A informação `cardExpiration`, referente a data de expiração do cartão utilizado na transação de pagamento, deve ser informado no formato `MM/AAAA`:

- `MM` dois dígitos para o mês
- `AAAA` quatro dígitos para o ano

Informações obrigatórias:

- ukey
- data do pagamento
- valor do pagamento
- descrição da transação
- método de pagamento
- numero do cartão
- data de expiração do cartão
- código de segurança do cartão

```json
{
  "ukey": "2633be28-b5fa-42cf-9f1d-43805bf611d6",
  "paymentDate": "2020-02-23T21:27:17.197Z",
  "amount": 123.456,
  "description": "teste+debit_card",
  "paymentMethod": "debit_card",
  "cardNumber": "4441025224586624",
  "cardholderName": "Van Jones",
  "cardExpiration": "02/2020",
  "cardSecurityCode": "123"
}
```

## Resposta de Sucesso

**Condição** : Se os dados da transação de pagamento forem válidos e não forem duplicados.

**Code** : `201 Created`

Conteúdo de exemplo da resposta

```json
{
  "ukey": "3462d8e1-14c2-4b28-bcaa-c4cc3add82d5",
  "paymentDate": "2020-02-23T23:22:43.517Z",
  "amount": 123.456,
  "description": "teste+debit_card",
  "paymentMethod": "debit_card",
  "cardNumber": "*6624",
  "cardholderName": "Van Jones",
  "cardExpiration": "02/2020",
  "cardSecurityCode": "123",
  "transactionId": "2e296d8f-9b6d-4c59-923d-f64f60d9c4a6",
  "customerName": "Jeudi Prando Cliente",
  "createdAt": "2020-02-23T23:22:43.990Z",
  "payable": {
    "status": "paid",
    "summaryCard": "*6624 02/2020 Van Jones",
    "payableDate": "2020-02-23T23:22:43.517Z",
    "amount": 123.456,
    "fee": 0.03,
    "feeAmount": "3.70368",
    "netAmount": 119.75232
  }
}
```

## Resposta de Erro 422

**Condição** : Quando alguma informação da transação de pagamento não é válida ou é duplicado.

**Code** : `422 Unprocessable Entity`

```json
{
  "error": true,
  "errors": {
    "amount": [
      "Amount can't be blank"
    ]
  }
}
```

## Resposta de Não Autorizado

**Condição** : Se o token informado na requisição não for válido ou estiver expirado.

**Code** : `401 Unauthorized`

Conteúdo de Exemplo

```text
jwt expired
```

**Anterior: [Endpoint Privado - Transações de Pagamento](../../README.md#transações-de-pagamento)**

[Endpoint Privado](../../README.md#endpoint-privado)

[Enpoints](../../README.md)

[voltar para o índice](../../../../README.md)
