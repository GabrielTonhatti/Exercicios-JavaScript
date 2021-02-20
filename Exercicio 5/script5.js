function calcula() {
    let preco, desconto
    preco = Number(document.getElementById("preco").value)
    desconto = preco - (preco * 0.1)
    document.getElementById("resultado").innerHTML = `Valor final é: R$ ${desconto.toFixed(2)} com 10% de desconto!`
}
