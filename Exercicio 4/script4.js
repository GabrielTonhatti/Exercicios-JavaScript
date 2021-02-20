function calcula() {
    //var
    let nota1, nota2, media
    //processamento
    nota1 = Number(document.getElementById("nota1").value)
    nota2 = Number(document.getElementById("nota2").value)
    media = ((nota1 * 2) + (nota2 * 3)) / (2 + 3)
    document.getElementById("resultado").innerHTML = `A média é ${media}`
}