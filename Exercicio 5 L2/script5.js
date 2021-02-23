function calcula() {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let opcao = Number(document.getElementById("opcao").value)
    let resultado
    switch (opcao) {
        case 1:
            resultado = (num1 + num2) / 2
            document.getElementById("resultado").innerHTML = `O resultado da operação é ${resultado}`
            break // sai do switch e não entra nos cases abaixo
        case 2:
            if (num1 >= num2) {
                resultado = (num1 - num2)
                document.getElementById("resultado").innerHTML = `O resultado da operação é ${resultado}`
            } else {
                resultado = (num2 - num1)
                document.getElementById("resultado").innerHTML = `O resultado da operação é ${resultado}`
            }
            break
        case 3:
            resultado = num1 * num2
            document.getElementById("resultado").innerHTML = `O resultado da operação é ${resultado}`
            break
        case 4:
            if (num2 != 0) {
                resultado = num1 / num2
                document.getElementById("resultado").innerHTML = `O resultado da operação é ${resultado}`
            } else {
                resultado = `Não é possível dividir por zero!`
            }
            break
        default:
            resultado = `Opção Inválida! Tente novamente...`
    }
}