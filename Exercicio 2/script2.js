function calcula()
{
    let num, num2, num3, multi
    num = document.getElementById("num").value
    num2 = document.getElementById("num2").value
    num3 = document.getElementById("num3").value
    multi = num * num2 * num3
    document.getElementById("resultado").innerHTML = `Resultado = ${multi}`
}