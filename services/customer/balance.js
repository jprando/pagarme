module.exports = async function (ukey, year, month) {
  // const { db: { paymentTransaction, payable, toPlain } } = this
  const { db: { paymentTransaction, payable } } = this

  const transactionCount = await paymentTransaction
    .count({ where: { ukey, year, month } })
  const transactionSum = await paymentTransaction
    .sum('amount', { where: { ukey, year, month } })

  const filterStatus = value => ({
    where: {
      ukey, payableYear: year, payableMonth: month, status: value
    }
  })

  const filterStatusPaid = filterStatus('paid')
  const filterStatusWaitingFunds = filterStatus('waiting_funds')

  const payableAvailableCount = await payable.count(filterStatusPaid)
  const payableWaitingFundsCount = await payable.count(filterStatusWaitingFunds)
  const payableAvailable = await payable.sum('net_amount', filterStatusPaid)
  const payableWaitingFunds = await payable.sum('net_amount', filterStatusWaitingFunds)

  return {
    period: { year, month },
    transaction: {
      count: transactionCount,
      total: transactionSum
    },
    payable:
    {
      available: {
        count: payableAvailableCount,
        total: payableAvailable
      },
      waitingFunds: {
        cound: payableWaitingFundsCount,
        total: payableWaitingFunds
      }
    }
  }
}
