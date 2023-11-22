function temperatureConverter() {
  const valueConvertionOne = document.querySelector("#valueConvertionOne").value
  const valueConvertionTwo = document.querySelector("#valueConvertionTwo").value
  let valueTemperature = document.querySelector("#valueTemperature").value
  // valueTemperature - Como é uma operação de conversão de temperatura não é necessário a validação desse input (valor pode ser NEGATIVO, 0 OU POSITIVO)
  valueTemperature = Number(valueTemperature)

  let isValid = true
  let msg

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
    msg = fahrenheitTo(valueConvertionTwo, valueTemperature)
  }

  if (valueConvertionOne == "celsius") {
    msg = celciusTo(valueConvertionTwo, valueTemperature)
  }

  if (valueConvertionOne == "kelvin") {
    msg = kelvinTo(valueConvertionTwo, valueTemperature)
  }

  return addOnScreen(isValid, msg)
}

// Função de conversão de fahrenheit para kelvin ou celsius
function fahrenheitTo(valueConvertionTwo, valueTemperature) {
  let calculo
  if (valueConvertionTwo == "kelvin") {
    calculo = (valueTemperature - 32) / 1.8 + 273.15
    return `Convertendo ${valueTemperature}°F, para Kelvin: ${calculo.toFixed(
      2
    )}K!`
  }
  calculo = (valueTemperature - 32) / 1.8
  return `Convertendo ${valueTemperature}°F, para Celsius: ${calculo.toFixed(
    2
  )}°C!`
}

// Função de conversão de Celsius para kelvin ou fahrenheit
function celciusTo(valueConvertionTwo, valueTemperature) {
  let calculo
  if (valueConvertionTwo == "kelvin") {
    calculo = valueTemperature + 273.15
    return `Convertendo ${valueTemperature}°C, para Kelvin: ${calculo.toFixed(
      2
    )}K!`
  }
  calculo = valueTemperature * 1.8 + 32
  return `Convertendo ${valueTemperature}°C, para Fahrenheit: ${calculo.toFixed(
    2
  )}°F!`
}
// Função de conversão de Kelvin para celsius ou fahrenheit
function kelvinTo(valueConvertionTwo, valueTemperature) {
  let calculo
  if (valueConvertionTwo == "celsius") {
    calculo = valueTemperature - 273.15
    return `Convertendo ${valueTemperature}K, para Celsius: ${calculo.toFixed(
      2
    )}°C!`
  }
  calculo = valueTemperature * 1.8 - 459.67
  return `Convertendo ${valueTemperature}K, para Fahrenheit: ${calculo.toFixed(
    2
  )}°F!`
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
