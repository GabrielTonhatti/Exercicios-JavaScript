function calcula(){
    let num, num2, sub
    num = document.getElementById("num").value
    num2 = document.getElementById("num2").value
    sub = num - num2
    document.getElementById("resultado").innerHTML = sub
}