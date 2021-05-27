function exercicio25() {
    let precos = [];
    let estoque = [];
    let totalEstoque = [];
    let MaiorArmazenada = [];
    let MenorArmazenada = [];
    let MaiorEstoque = 0;
    let MenorEstoque = 0;
    let MaiorPreco = 0;
    let custoEstoque = [];
    let ValorTotalEstoque = [];


    for (let i = 0; i < 10; i++) {
        estoque[i] = [];
        custoEstoque[i] = [];
        precos[i] = Number(prompt(`Digite o preço do ${i + 1}º produto: R$`));
        for (let j = 0; j < 5; j++) {
            estoque[i][j] = Number(prompt(`Digite a quantidade do ${i + 1}º produto estocado no ${j + 1}º armazém: `));
        }
    }

    console.log(precos);
    console.log(estoque);

    for (let i = 0; i < 10; i++) {
        totalEstoque[i] = 0;
        for (let j = 0; j < 5; j++) {
            alert(`O ${i + 1}º produto tem ${estoque[i][j]} unidade(s) no ${1 + j}º armazém`);

            totalEstoque[i] += estoque[i][j];
        }
    }

    for (let i = 0; i < 10; i++) {
        alert(`O total do ${i + 1}º produto armazenado em todos os armazéns é ${totalEstoque[i]}`);
        MaiorArmazenada[i] = estoque[i][0];
        MenorArmazenada[i] = estoque[i][0];
        for (let j = 0; j < 5; j++) {

            if (estoque[i][j] > MaiorArmazenada[i]) {
                MaiorArmazenada[i] = estoque[i][j];
            }

            if (estoque[i][j] < MenorArmazenada[i]) {
                MenorArmazenada[i] = estoque[i][j];
            }

            custoEstoque[i][j] = 0;
        }
    }

    MaiorPreco = precos[0];
    MaiorEstoque = MaiorArmazenada[0];
    MenorEstoque = MaiorArmazenada[0];

    for (let i = 0; i < 10; i++) {
        if (MaiorArmazenada[i] > MaiorEstoque) {
            MaiorEstoque = MaiorArmazenada[i];
            MaiorPreco = precos[i];
        }

        if (MenorArmazenada[i] < MenorEstoque) {
            MenorEstoque = MenorArmazenada[i]
        }
    }

    alert(`O valor do produto com maior estoque é R$ ${MaiorPreco.toFixed(2).replace('.', ',')}`);
    alert(`O menor estoque tem ${MenorEstoque} unidades(s) do produto`);

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 5; j++) {
            custoEstoque[i][j] = precos[i] * estoque[i][j]
        }

        for (let c = 0; c < 5; c++) {
            ValorTotalEstoque[i] = 0;
            ValorTotalEstoque[i] += custoEstoque[c][i]
            alert(`O valor do ${c + 1}º estoque é: R$ ${(ValorTotalEstoque[i]).toFixed(2).replace('.', ',')} `)

        }
    }

    console.log(totalEstoque)
    console.log('Maior estoque', MaiorArmazenada)
    console.log('Vetor Menor estoque', MenorArmazenada)
    console.log(MaiorEstoque)
    console.log('preço', MaiorPreco)
    console.log('Menor Estoque', MenorEstoque)
    console.log('Valor de cada estoque', custoEstoque)
    console.log('Valor Total dos estoques', ValorTotalEstoque)

}

// Inverter a matriz, não é 10x5 é 5x10

let exec = document.getElementById('exec');
exec.addEventListener('click', exercicio25, false);
