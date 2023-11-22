function temperatureConverter() {
  const valueConvertionOne = document.querySelector("#valueConvertionOne").value
  const valueConvertionTwo = document.querySelector("#valueConvertionTwo").value

  let isValid = true
  let msg

  if (valueConvertionOne === valueConvertionTwo) {
    isValid = false
    msg = "Conversão errada! Valores iguais!"
    return addOnScreen(isValid, msg)
  }

  if (valueConvertionOne === "" || valueConvertionTwo === "") {
    isValid = false
    msg = "Conversão errada! É necessário valor de conversão!"
    return addOnScreen(isValid, msg)
  }

  msg = `OI`
  return addOnScreen(isValid, msg)()
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
