const cpfInvalid = 'CPF is not a valid value'

module.exports = cpf => {
  if (cpf === undefined) {
    return undefined
  }
  let numeros, digitos, soma, i, resultado, digitosIguais
  digitosIguais = 1
  if (cpf.length < 11) {
    return cpfInvalid
  }
  for (i = 0; i < cpf.length - 1; i++) {
    if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
      digitosIguais = 0
      break
    }
  }
  if (!digitosIguais) {
    numeros = cpf.substring(0, 9)
    digitos = cpf.substring(9)
    soma = 0
    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado !== digitos.charAt(0)) {
      return cpfInvalid
    }
    numeros = cpf.substring(0, 10)
    soma = 0
    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado !== digitos.charAt(1)) {
      return cpfInvalid
    }
    return null
  } else {
    return cpfInvalid
  }
}
