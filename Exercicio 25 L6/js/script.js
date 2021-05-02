function exercicio25() {
    let precos = [];
    let estoque = [];
    let totalEstoque = [];
    let totalProdutos = [];
    let MaiorArmazenada = [];
    let MenorArmazenada = [];
    let MenorEstoque = 0;
    let MaiorPreco = 0;
    let custoEstoque = [];

    for (let i = 0; i < 4; i++) {
        precos[i] = Number(prompt(`Digite o preço do ${i + 1}º produto: R$`));
    }

    for (let i = 0; i < 3; i++) {
        estoque[i] = [];
        totalEstoque[i] = 0;
        for (let j = 0; j < 4; j++) {
            estoque[i][j] = Number(prompt(`Digite a quantidade do ${j + 1}º produto estocado no ${i + 1}º armazém: `))
            totalEstoque[i] += estoque[i][j];
        }
    }

    for (let i = 0; i < 4; i++) {
        totalProdutos[i] = 0;
        for (let j = 0; j < 3; j++) {
            totalProdutos[i] += estoque[j][i];
        }
    }

    MaiorPreco = precos[0]

    for (let i = 0; i < 3; i++) {
        MaiorArmazenada[i] = estoque[i][0]
        MenorArmazenada[i] = estoque[i][0]
        for (let j = 0; j < 4; j++) {
            if (estoque[i][j] > MaiorArmazenada[i]) {
                MaiorArmazenada[i] = estoque[i][j]
                MaiorPreco = precos[j]
            }

            if (estoque[i][j] < MenorArmazenada[i]) {
                MenorArmazenada[i] = estoque[i][j]
            }
        }
    }

    MenorEstoque = MenorArmazenada[0]

    for (let i = 0; i < MenorArmazenada.length; i++) {
        if (MenorArmazenada[i] < MenorEstoque) {
            MenorEstoque = MenorArmazenada[i]
        }
    }

    for (let i = 0; i < 3; i++) {
        alert(`No ${i + 1}º estoque tem ${totalEstoque[i]} produtos armazenados`)
    }

    for (let i = 0; i < 4; i++) {
        alert(`O ${i + 1}º produto tem  ${totalProdutos[i]} unidades em todos os armazens`)
    }

    alert(`O preço do produto com maior estoque é ${(MaiorPreco).toFixed(2).replace('.',',')}`)
    alert(`O menor estoque tem ${MenorEstoque} unidades`)
    
    for (let i = 0; i < 3; i++) {
        custoEstoque[i] = 0;
        for(let j = 0; j < 4; j++) {
            custoEstoque[i] += precos[j] * estoque[i][j]
        }

        alert(`O valor total do ${1 + i}º estoque é: R$ ${(custoEstoque[i]).toFixed(2).replace('.',',')}`)
    }


    console.log('Preços:', precos)
    console.log('Armazém:', estoque)
    console.log('Total do estoque:', totalEstoque)
    console.log('Total de cada Produto:', totalProdutos)
    console.log('Produto com maior estoque', MaiorArmazenada)
    console.log('Maior Preço', MaiorPreco)
    console.log('Menor Armazenada', MenorArmazenada)
    console.log('Menor Estoque', MenorEstoque)
    console.log("Custo Estoque:", custoEstoque)

}

let exec = document.getElementById('exec');
exec.addEventListener('click', exercicio25, false);
