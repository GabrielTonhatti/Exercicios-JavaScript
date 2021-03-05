function Calc() {
    let idade, i
    let porcentual1 = 0
    let porcentual5 = 0
    let etaria1 = 0
    let etaria2 = 0
    let etaria3 = 0
    let etaria4 = 0
    let etaria5 = 0

    for (i = 1; i <= 8; i++) {
        idade = Number(prompt(`Digite o nome da ${i}º pessoa:`))

        if (idade <= 15) {
            etaria1++
        }
        else if (idade >= 16 && idade <= 30) {
            etaria2++
        }
        else if (idade >= 31 && idade <= 45) {
            etaria3++
        }
        else if (idade >= 46 && idade <= 60) {
            etaria4++
        }
        else {
            etaria5++
        }
    }

    porcentual1 = etaria1 / 8 * 100
    porcentual5 = etaria5 / 8 * 100
    document.getElementById('resultado').innerHTML = ` Faixa 1: ${etaria1} <br/> Faixa 2: ${etaria2} <br/> Faixa 3: ${etaria3} <br/> Faixa 4: ${etaria4} <br/> Faixa 5: ${etaria5}`
    document.getElementById('porcentagem').innerHTML = `O percentual de pessoas na primeira faixa etária é ${porcentual1}%`
    document.getElementById('porcentagem2').innerHTML = `O percentual de pessoas na ultima faixa etária é ${porcentual5}%`
}