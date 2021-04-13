function Ex1() {
    let opcao = 0;
    let Funcionario = [];
    let vendas = [];
    let achou = 0;
    let i = 0;

    function NovoVendedor() {
        while (Funcionario.length != 4) {
            let objeto = new Object();

            objeto.vendedor = prompt(`Digite o código do ${i + 1}º vendedor: `)

            for (let j = 0; j < Funcionario.length; j++) {
                if (Funcionario[j].vendedor == objeto.vendedor) {
                    achou = 1
                    alert('Vendedor já cadastrado!')
                    objeto.vendedor = prompt(`Digite o código do ${i + 1}º vendedor: `)
                } else {
                    achou = 0
                }
            }

            if (achou == 0) {
                Funcionario.push(objeto)
            }
            i++
        }
    }

    console.log(Funcionario)

    function Vendas() {
        for (let i = 0; i < 4; i++) {
            let objeto = new Object();

            objeto.codigo = prompt(`Digite o código do ${i + 1}º vendedor que ja foi cadastrado: `)
            objeto.mes = prompt(`Digite o mês da venda do funcionário:`)
            vendas.push(objeto)

            if (vendas[i].codigo == objeto.codigo && vendas[i].mes == objeto.mes) {
                achou = 1
                alert('Já foi registrado uma venda para esse funcionário nesse mês!!!')
            } else {
                achou = 0
            }

        }
        console.log(vendas)

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