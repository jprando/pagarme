module.exports = payable => {
  const errors = []

  if (!payable) {
    errors.push({ code: 1000, msg: 'payable must be informed' })
  } else {
    if (typeof payable.value !== 'number' && payable.value <= 0) {
      errors.push({ code: 1001, msg: 'value must be positive number' })
    }
    if (typeof payable.description !== 'string' || !payable.description.trim()) {
      errors.push({ code: 1002, msg: 'description must be informed' })
    }
    if (typeof payable.method !== 'string' || payable.method !== 'debit_card' || payable.method !== 'credit_card') {
      errors.push({ code: 1003, msg: 'method must be \'debit_card\' or \'credit_card\'' })
    }
    if (typeof payable.cardNumber !== 'string' || !payable.cardNumber.trim()) {
      errors.push({ code: 1004, msg: 'card number must be informed' })
    }
    if (typeof payable.personName !== 'string' || !payable.personName.trim()) {
      errors.push({ code: 1005, msg: 'person name must be informed' })
    }
    if (!(payable.expirationDate instanceof Date) || new Date() > payable.expirationDate) {
      errors.push({ code: 1006, msg: 'expiration date must be informed and be in the future' })
    }
    if (typeof payable.cvvNumber !== 'number' || payable.cvvNumber <= 0) {
      errors.push({ code: 1006, msg: 'cvv number must be informed and be a positive number' })
    }
  }
  return {
    error: errors.length > 0,
    msgs: errors
  }
}
