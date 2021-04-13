function Ex2() {
    let Pessoa = [];
    let TotalSal = 0;
    let MediaSal = 0;
    let TotalFilhos = 0;
    let MediaFilhos = 0;
    let MaiorSal = 0;
    let PercentualMulheres = 0;
    let TotalMulheres = 0;

    for (let i = 0; i < 20; i++) {
        let obejto = new Object;

        obejto.salario = Number(prompt(`Qual o seu salário? R$`))
        obejto.idade = Number(prompt('Qual a sua idade?'))
        obejto.QtdFilhos = Number(prompt('Quantos filhos você tem?'))
        obejto.sexo = Number(prompt('Digite 1 - Masculino ou 2 - Feminino: '))

        if (obejto.sexo == 1) {
            obejto.sexo = "Masculino"
        } else if (obejto.sexo == 2) {
            obejto.sexo = "Feminino"
        }

        Pessoa.push(obejto)

        TotalSal = Pessoa[i].salario + TotalSal
        TotalFilhos = Pessoa[i].QtdFilhos + TotalFilhos

        if (Pessoa[i].salario > MaiorSal) {
            MaiorSal = Pessoa[i].salario
        }

       if (Pessoa[i].sexo == "Feminino" && Pessoa[i].salario > 1000) {
           TotalMulheres++
       }

    }

    MediaSal = TotalSal / 20
    MediaFilhos = TotalFilhos / 20
    MaiorSal = Pessoa[0].salario
    PercentualMulheres = TotalMulheres / 20 * 100

    document.getElementById("Media_Salario").innerHTML = `A média de salário é R$${MediaSal.toFixed(2)}!`
    document.getElementById("Media_Filhos").innerHTML = `A média de quantidade de filhos é ${MediaFilhos}!`
    document.getElementById("Maior_Salario").innerHTML = `O maior salário é R$${MaiorSal.toFixed(2)}!`
    document.getElementById("Percentual_Mulheres").innerHTML = `O percentual de mulheres com salário maior que R$ 1000,00 é ${PercentualMulheres}%!`

}