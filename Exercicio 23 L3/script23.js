function calc() {

    let opcao = 0;
    let sal = 0;
    let sal2 = 0;
    let sal3 = 0;
    let ferias1 = 0;
    let novoSal = 0;
    let meses = 0;
    let decimoT = 0;
    let totalD = 0;

    function salario() {

        sal = Number(prompt('Digite o seu salário atual: R$'));

        if (sal <= 210) {
            novoSal = sal + (sal * 0.15);
        } else if (sal > 210 && sal <= 600) {
            novoSal = sal + (sal * 0.10);
        } else {
            novoSal = sal + (sal * 0.05);
        }
    }

    function ferias() {

        sal2 = Number(prompt('Digite o seu salário atual: R$'));

        ferias1 = sal2 + (sal2 / 3);
    }

    function decimoTerceiro() {

        sal3 = Number(prompt('Digite o seu salário atual: R$'));
        meses = Number(prompt("Digite o número de meses trabalhado(No maxímo 12 meses!): "));
        decimoT = ((sal3 * meses) / 12);
        totalD = sal3 + decimoT;
    }

    do {
        opcao = Number(prompt(`Escolha uma opção: \n 1 - Novo salário: \n 2 - Férias: \n 3 - Décimo terceiro: \n 4 - Sair.`));

        if (opcao === 1) {
            salario();
        } else if (opcao === 2) {
            ferias();
        } else if (opcao === 3) {
            decimoTerceiro();
        } else if (opcao === 4) {
            alert('Saindo...');
        } else {
            alert('Opção Inválida!');
        }

        document.getElementById('Salario').innerHTML = `O seu salário era R$ ${sal.toFixed(2)}, e seu novo salário é R$ R${novoSal.toFixed(2)}.`
        document.getElementById('Ferias').innerHTML = `O seu salário é R$ ${sal2.toFixed(2)}, e o valor de suas férias é R$ ${ferias1.toFixed(2)}.`
        document.getElementById('DecimoTerceiro').innerHTML = `O seu salário é R$ ${sal3.toFixed(2)}, o valor do seu décimo terceiro é R$ ${decimoT.toFixed(2)}, e o décimo terceiro + salário é R$ ${totalD.toFixed(2)}.`

    } while (opcao !== 4)
}