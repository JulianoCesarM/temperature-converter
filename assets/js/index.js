function temperatureConverter() {
  const valueFahrenheit = document.querySelector("#valueFahrenheit")
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

  const resp = document.querySelector("#resp")
  resp.classList.add("resp")
  return (resp.innerHTML = msg)
}
