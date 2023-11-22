function temperatureConverter() {
  const valueConvertionOne = document.querySelector("#valueConvertionOne").value
  const valueConvertionTwo = document.querySelector("#valueConvertionTwo").value
  let isValid = true
  if (valueConvertionOne == valueConvertionTwo) {
    isValid = false
    adicionarNaTela(isValid)
  }
  const calculateFarenheitToCelcius = ((valueFahrenheit.value - 32) * 5) / 9
  const calculateFarenheitToKelvin =
    ((valueFahrenheit.value - 32) * 5) / 9 + 273.15
  msg = `Farenheit ${
    valueFahrenheit.value
  }°F, convertido para Celcius fica ${calculateFarenheitToCelcius.toFixed(
    2
  )}°C</br>Farenheit ${
    valueFahrenheit.value
  }°F, convertido para Kelvin fica ${calculateFarenheitToKelvin.toFixed(2)}°K`

  resp.classList.add("resp")
  return (resp.innerHTML = msg)
}

function adicionarNaTela(isValid) {
  const resp = document.querySelector("#resp")
  if (!isValid) {
    resp.classList.add("erro")
    resp.innerText = "Conversão errada! Valores iguais!"
  }
}
