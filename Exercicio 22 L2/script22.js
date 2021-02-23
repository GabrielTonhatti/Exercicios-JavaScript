function calc() {
    let idade, peso, grupo
    idade = Number(document.getElementById("idade").value)
    peso = Number(document.getElementById("peso").value)

    if (idade < 20) {
        if (peso < 60) {
            grupo = 9
        } else if (peso >= 60 && peso <= 90) {
            grupo = 8
        } else {
            grupo = 7
        }
    } else if (idade >= 20 && idade <= 50) {
        if (peso < 60) {
            grupo = 6
        } else if (peso >= 60 && peso <= 90) {
            grupo = 5
        } else {
            grupo = 4
        }
    } else {
        if (peso < 60) {
            grupo = 3
        } else if (peso >= 60 && peso <= 90) {
            grupo = 2
        } else {
            grupo = 1
        }
    }
    document.getElementById("resultado").innerHTML = `O seu grupo de risco é ${grupo}`
}