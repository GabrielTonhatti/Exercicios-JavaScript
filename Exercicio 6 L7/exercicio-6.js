function exercicio6() {

    let opcao = 0;
    let alunos = [];
    let primeiraNota = [];
    let segundaNota = [];
    let media = [];

    while (opcao !== 6) {

        opcao = Number(prompt('Escolha uma opção: \n\n1-Definir Informações da Turma: \n2-Inserir alunos e notas: \n3-Exibir alunos e médias: \n4-Exibir alunos aprovados: \n5-Exibir alunos reprovados: \n6-Sair do programa:'))

        switch (opcao) {

            case 1:
                InformacaoTurma();
                break
            case 2:
                inserirAluno(alunos, primeiraNota, segundaNota);
                break
            case 3:
                exibirAlunos(alunos, primeiraNota, segundaNota, media);
                break
            case 4:
                aprovados(alunos, media);
                break
            case 5:
                reprovados(alunos, media)
                break
            case 6:
                alert('Saíndo do programa...')
                break
            default:
                alert('Opção inválida!!!')
                break

        }

    }

}

function InformacaoTurma() {

}

function inserirAluno(alunos, primeiraNota, segundaNota) {

    let aluno = '';
    let nota1 = 0;
    let nota2 = 0;
    let opcao = 0;

    for (let i = 0; i < 1000; i++) {
        aluno = prompt(`Digite o nome do ${i + 1}º aluno(a): `)
        nota1 = Number(prompt(`Digite a primeira nota do aluno(a) ${aluno}:`))
        nota2 = Number(prompt(`Digite a segunda nota do aluno(a) ${aluno}:`))

        alunos.push(aluno)
        primeiraNota.push(nota1)
        segundaNota.push(nota2)

        opcao = Number(prompt(`Você deseja inserir outro aluno(a)? \n1-Sim \n2-Não`))

        if (opcao == 2) {
            break
        } else {
            continue
        }

    }

    console.log(`Alunos:`, alunos)
    console.log(`Primeira nota:`, primeiraNota)
    console.log(`Segunda nota:`, segundaNota)

}

function exibirAlunos(alunos, primeiraNota, segundaNota, media) {
    for (let i = 0; i < alunos.length; i++) {
        media[i] = (primeiraNota[i] + segundaNota[i]) / 2
        alert(`Alunos: \n${alunos[i]} com média ${media[i]}`)
    }

    console.log('Média:', media)

}

function aprovados(alunos, media) {
    for (let i = 0; i < alunos.length; i++) {
        if (media[i] >= 6) {
            alert(`O aluno(a) ${alunos[i]} foi aprovado com média ${media[i]}`)
        }
    }

}

function reprovados(alunos, media) {
    for (let i = 0; i < alunos.length; i++) {
        if (media[i] < 6) {
            alert(`O aluno(a) ${alunos[i]} foi reprovado com média ${media[i]}`)

        }
    }
}

let el = document.getElementById('ex6');
el.addEventListener('click', exercicio6, false);
