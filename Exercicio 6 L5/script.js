function Ex6() {
    let cliente = [];
    let conta = [];
    let opcao = 0;
    let achou = 0;
    let consultar = 0;

    function Cadastro() {
        let ClienteObj = new Object
        let ContaObj = new Object

        ClienteObj.Id = Number(prompt("Digite o id do cliente: "))

        for (let i = 0; i < cliente.length; i++) {
            if (cliente[i].Id == ClienteObj.Id) {
                achou = 1
                alert('Cliente já cadastrado!')
            } else {
                achou = 0
            }
        }

        if (achou == 0) {
            ClienteObj.Nome = prompt("Digite o nome do cliente: ")
            ClienteObj.Telefone = prompt('Digite o telefone do cliente:')
            ClienteObj.Cidade = prompt('Digite a cidade que o cliente mora:')
            ClienteObj.Rua = prompt('Digite o nome da Rua')
            ClienteObj.Numero = Number(prompt('Digite o número da casa do cliente:'))

            ContaObj.Conta = Math.floor(Math.random(0, 1) * 10000)
            ContaObj.Digito = Math.floor(Math.random(0, 1) * 10)
            ContaObj.Titular = ClienteObj.Nome
            ContaObj.Saldo = Number(prompt('Digite o saldo que o cliente vai depositar: R$'))

            cliente.push(ClienteObj)
            conta.push(ContaObj)
        }
    }

    function ConsultarCliente() {
        let ClienteObj = new Object

        ClienteObj.Id = Number(prompt("Digite o número do cliente que deseja consultar: "))

        for (let i = 0; i < cliente.length; i++) {
            if (cliente[i].Id == ClienteObj.Id) {
                consultar = prompt('Cliente encontrado! \nDeseja ver as informações do cliente(1-Sim ou 2-Não)?')
                if (consultar == 1) {
                    alert(`Dados do cliente: \nNome: ${cliente[i].Nome} \nTelefone: ${cliente[i].Telefone} \n\nEndereço: \nCidade: ${cliente[i].Cidade} \nRua: ${cliente[i].Rua} \nNúmero: ${cliente[i].Numero} \n\nDados da conta: \nTitular: ${conta[i].Titular} \nNúmero da conta: ${conta[i].Conta}-${conta[i].Digito} \nSaldo: R$ ${conta[i].Saldo.toFixed(2)}`)
                } else if (consultar == 2) {
                    alert('Saíndo da consulta de clientes...')
                }

            } else {
                consultar = prompt('Cliente não encontradoo! \nDeseja cadastras o cliente(1-Sim ou 2-Não)?')
                if (consultar == 1) {
                    Cadastro()
                } else if (consultar == 2) {
                    alert('Saíndo da consulta de clientes...')
                }
            }
        }
    }

    while (opcao != 3) {
        opcao = Number(prompt('Escolha uma das opções: \n1-Cadastrar conta: \n2-Verificar número do cliente cadastrado:\n3-Sair:'))

        if (opcao == 1) {
            Cadastro()
        } else if (opcao == 2) {
            ConsultarCliente()
        } else if (opcao == 3) {
            alert("Saíndo...")
            for (let i = 0; i < cliente.length; i++) {
                document.getElementById('Cadastro').innerHTML = `Cadastros:`
                document.getElementById('resultado').innerHTML += `<br/><br/> Dados do cliente: <br/> Nome: ${cliente[i].Nome} <br/> Telefone: ${cliente[i].Telefone} <br/><br/> Endereço: <br/> Cidade: ${cliente[i].Cidade} <br/> Rua: ${cliente[i].Rua} <br/> Número: ${cliente[i].Numero} <br/><br/> Dados da conta: <br/> Titular: ${conta[i].Titular} <br/> Número da conta: ${conta[i].Conta}-${conta[i].Digito} <br/> Saldo: R$ ${conta[i].Saldo.toFixed(2)}`
            }
        } else {
            alert("Opção Inválida!")
        }
    }
}