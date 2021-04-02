function Calc() {
    let valor;
    let parcelas = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
    let parcela2 = []
    let juros = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    let jurosP = [0.03, 0.06, 0.09, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.30];
    let desconto = 0;
    let opcao = 0;
    let opcao2 = 0;
    let DadosTabela = '';
    let cabecalhoTabela = '';
    let contador = 0;
    let precoFinal = [];
    let i = 0;
    let input = 'Parcela: <input type = "number" id = "parcel"/>';
    let button = '<button type="button" onclick="parcel()"> Parcela </button>';

    function AVista() {
        desconto = valor - (valor * 0.20);
        document.getElementById('ValorAVista').innerHTML = `O valor da compra a vista é R$ ${desconto}, com 20% desconto!`
        opcao2 = 2;
    }

    function Parcelado() {

        cabecalhoTabela = '<tr> <td> Preço: </td> <td> Parcelas: </td> <td> Juros: </td> <td> Preço Final: </td> </tr>'
        document.getElementById('cabecalhoTabela').innerHTML = cabecalhoTabela

        while (contador !== 60) {
            contador = contador + 6;
            precoFinal[i] = valor + (valor * jurosP[i]);
            parcela2[i] = precoFinal[i] / parcelas[i];
            DadosTabela = DadosTabela + `<tr> <td> R$ ${valor} </td> <td> ${parcelas[i]}X de R$ ${parcela2[i].toFixed(2)} </td> <td> ${juros[i]}% </td> <td> R$ ${precoFinal[i].toFixed(2)} </tr>`
            i++
        }
        opcao2 = 2;

        document.getElementById('DadosTabela').innerHTML = DadosTabela;
        parcel()

    }

    do {
        opcao2 = Number(prompt('Escolha uma das opções: \n 1 - Novo Veículo: \n 2 - Saír:'))

        if (opcao2 === 1) {

            valor = Number(prompt('Digite o valor do veículo: R$'))
            opcao = Number(prompt('Escolha uma opção: \n 1 - À vista: \n 2 - Parcelado: '))

            if (opcao === 1) {
                AVista()
            } else if (opcao === 2) {
                Parcelado()
            } else {
                alert('Opção Inválida!!!')
            }

        } else if (opcao2 === 2) {
            alert('Saíndo...')
        } else {
            alert('Opção Inválida!!!')
        }
    } while (opcao2 !== 2)

    function parcel() {
        document.getElementById('input').innerHTML = input;
        document.getElementById('parcela').innerHTML = button;
        
        let parcela = 0;

        parcela = document.getElementById('parcel').value

        if (parcela == 6) {
            document.getElementById('resultado').innerHTML = `O seu novo veículo será parcelado em ${pacelas[0]}, e o preço final será ${precoFinal[0]}!`
        }

    }
}


