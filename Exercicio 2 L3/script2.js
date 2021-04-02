function Calcular() {
    let preco = 5.0
    let qtd = 120
    let lucro = (preco * qtd) - 200
    let maiorlucro = lucro
    let dadosTabela = '' // conteúdo da tabela

    while (preco >= 1.0) {
        dadosTabela = dadosTabela + `<tr class = 'tablerow'> <td> R$ ${preco.toFixed(2)} </td> <td> ${qtd} </td> <td> R$ 200.00 </td> <td> R$ ${lucro.toFixed(2)} </td> </tr>`
        preco = preco - 0.50 // caindo
        qtd = qtd + 26 // subindo
        lucro = (preco * qtd) - 200
        if (lucro > maiorlucro) {  // achamos um novo maiorlucro
            maiorlucro = lucro // trocando o valor
        }
    }
    document.getElementById('dadosTabela').innerHTML = dadosTabela
    alert(`Maior lucro ${maiorlucro}`)
}