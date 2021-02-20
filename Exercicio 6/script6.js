function calc() {
    let salario, comissao, venda, SalarioF
    salario = Number(document.getElementById("salario").value)
    venda = Number(document.getElementById("vendas").value)
    comissao = (venda * 0.04)
    SalarioF = (salario + comissao)
    document.getElementById("resultado").innerHTML = `A sua comissão é de R$ ${comissao.toFixed(2)}`
    document.getElementById("salarioF").innerHTML = `O seu salário final é de R$ ${SalarioF.toFixed(2)}`
}