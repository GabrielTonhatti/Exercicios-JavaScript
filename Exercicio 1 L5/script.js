function Ex1() {
    let opcao = 0;
    let Vendedor = [];
    let vendas = [];

    function NovoVendedor() {
        for (let i = 0; i < 4; i++) {
            let objeto = new Object();
            let existe = [];
            let comparacao = [];

            objeto.vendedor = prompt(`Digite o código do ${i + 1}º vendedor: `)

            for (let j = 2; j < 6; j++) {

                existe.push(objeto)
                comparacao.push(objeto)

                while (comparacao[i] === existe[j]) {
                    if (comparacao[i] === existe[j]) {
                        alert("Já existe um vendedor com este código!")
                        objeto.vendedor = prompt(`Digite o código do ${i + 1}º vendedor: `)

                    } else {
                        Vendedor.push(objeto)
                    }
                }
            }
        }
    }

    function Vendas() {
        for (let i = 0; i < 4; i++) {
            let objeto = new Object();

            objeto.codigo = prompt(`Digite o código do ${i + 1}º vendedor que ja foi cadastrado: `)
            objeto.mes = prompt(`Digite o mês da venda do funcionário:`)
            vendas.push(objeto)

            for (let c = 1; c < 5; c++) {
                if (vendas[i].codigo == vendas[c].codigo && vendas[i].mes == vendas[c].mes) {
                    alert('Já foi registrado uma venda para esse funcionário nesse mês!!!')
                }
            }



            console.log(vendas[i])
        }
    }

    while (opcao != 7) {
        opcao = Number(prompt('Escolha uma das opções: \n1-Cadastrar vendedor: \n2-Cadastrar venda: \n3-Consultar as vendas de um funcionário em determinado mês: \n4-Consultar o total das vendas de determinado vendedor: \n5-Mostrar o número do vendedor que mais vendeu em determinado mês: \n6-Mostrar o número do mês com mais vendas: \n7-Sair'))

        if (opcao == 1) {
            NovoVendedor();
        } else if (opcao == 2) {
            Vendas()
        } else if (opcao == 3) {

        } else if (opcao == 4) {

        } else if (opcao == 5) {

        } else if (opcao == 6) {

        } else if (opcao == 7) {
            alert("Saíndo...")
        } else {
            alert("Opção Inválida!!!")
        }
    }
}