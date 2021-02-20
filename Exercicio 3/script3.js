function calcula() {
    let num, num2, div
    num = document.getElementById("num").value
    num2 = document.getElementById("num2").value
    div = num / num2
    document.getElementById("resultado").innerHTML = `Resultado = ${div.toFixed(2)}`
}