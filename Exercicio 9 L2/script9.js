function calcula() {
    let saldo = Number(document.getElementById("saldo").value)
    let credito = 0

    if (saldo > 400) {
        credito = 30
    }
    else if ((saldo <= 400) && (saldo > 300)) {
        credito = 25
    }
    else if ((saldo <= 300) && (saldo > 200)) {
        credito = 20
    }
    else if ((saldo <= 200) && (saldo > 0)) {
        credito = 10
    }
    else {
        credito = 0
    }
    document.getElementById("resultado").innerHTML = `O crédito concedido é ${credito}%`
}
