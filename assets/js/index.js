function temperatureConverter() {
  const valueConvertionOne = document.querySelector("#valueConvertionOne").value
  const valueConvertionTwo = document.querySelector("#valueConvertionTwo").value
  const valueTemperature = document.querySelector("#valueTemperature").value
  // valueTemperature - Como é uma operação de conversão de temperatura não é necessário a validação desse input (valor pode ser NEGATIVO, 0 OU POSITIVO)

  let isValid = true
  let msg
  let resposta

  const regexTemp = /^(fahrenheit|celsius|kelvin)$/i

  if (valueConvertionOne === valueConvertionTwo) {
    isValid = false
    msg = "Conversão errada! Valores iguais!"
    return addOnScreen(isValid, msg)
  }

  if (
    !regexTemp.test(valueConvertionOne) ||
    !regexTemp.test(valueConvertionTwo)
  ) {
    isValid = false
    msg =
      "Conversão errada! Valores diferentes de Celsius, Kelvin ou fahrenheit!"
    return addOnScreen(isValid, msg)
  }

  if (valueConvertionOne == "fahrenheit") {
    resposta = fahrenheitTo(valueConvertionTwo, valueTemperature)
  }

  msg = `${resposta}`
  return addOnScreen(isValid, msg)
}

// Função de conversão de fahrenheit para kelvin ou celsius
function fahrenheitTo(valueConvertionTwo, valueTemperature) {
  if (valueConvertionTwo == "kelvin") {
    return (valueTemperature - 32) / 1.8 + 273.15
  }
  return (valueTemperature - 32) / 1.8
}

// Adiciona Todas as resposta para o usuario e erros
function addOnScreen(isValid, msgResp) {
  const inputResp = document.querySelector("#inputResp")
  if (!isValid) {
    inputResp.classList.add("erro")
    return (inputResp.innerText = msgResp)
  }
  inputResp.classList.add("resp")
  return (inputResp.innerText = msgResp)
}
