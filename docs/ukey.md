# UKey

UKey é uma chave geral única que liga Usuário + Cliente + Transação + Recebíveis.

Quando um usuário é criado, o sistema irá criar a `ukey` do usuário, que deverá ser utilizado ao criar um cliente e transações de pagamento.

Quando for criar um Cliente, a `ukey` de um usuário ativo deverá ser informada.

Quando for criar uma transação de pagamento a `ukey` do Usuário/Cliente ativo deverá ser informada.

A relação Usuário e Cliente é 1 para 1, ou seja, somente um cliente por usuário será permitido.

A intenção da existência da `ukey` seria poder trabalhar com computação distribuída no processamento e armazenamento dos dados, que eu acredito não ser pequeno e a existências de muitas requisições por segundo simultâneas deve exigir uma organização, distribuição e utilização dos dados bastante diferenciado do que estamos acostumados em sistemas transacionais mais simples existentes por ai, onde os relacionamentos são feito através de campos Ids do tipo numérico e auto-incremental.

**Próximo: [Pastas](/docs/pastas.md)**

[voltar para o índice](/README.md#lista-de-conteúdo)
