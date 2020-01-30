const validate = require('./validate')
module.exports = {
  validate,

  insert (transaction) {
    /// setar o valor de transactionDate com a data atual
    /// numero do cartao, armazenar somente os 4 ultimos digitos

    /// gerar os recebiveis (payables)
    /// se cartao de debito
    ///   status = paid
    ///   paymentDate = D+0 (agora/hoje/data atual)
    /// se cartao de credito
    ///   status = waiting_funds
    ///   paymentDate = D+30 (data atual + 30 dias)
  },
  update (id, transaction) {
    /// numero do cartao, armazenar somente os 4 ultimos digitos
  },
  get (id) {
    /// numero do cartao, retornar somente os 4 ultimos digitos
  },
  delete (id) {

  },
  search (page = 0) {

  }
}
