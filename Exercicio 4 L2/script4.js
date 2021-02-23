function calc(){
    let num, num2, num3
    num = Number(document.getElementById("num").value)
    num2 = Number(document.getElementById("num2").value)
    num3 = Number(document.getElementById("num3").value)

    if (num > num2 && num > num3){
        document.getElementById("resultado").innerHTML = `O maior número é o ${num}!`
    }
    else if (num2 > num && num2 > num3){
        document.getElementById("resultado").innerHTML = `O maior número é o ${num2}!`
    }
    else if (num3 > num && num3 > num2){
        document.getElementById("resultado").innerHTML = `O maior número é o ${num3}!`
    }
    else {
        document.getElementById("resultado").innerHTML = `Todos os números são iguais!`
    }
}