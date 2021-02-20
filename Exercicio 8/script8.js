function calc() {
    let peso, pesogramas
    peso = Number(document.getElementById("peso").value)
    pesogramas = peso * 1000
    document.getElementById("resultado").innerHTML = `Seu peso em gramas é ${pesogramas}g`
}