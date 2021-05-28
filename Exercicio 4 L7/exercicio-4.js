function execicio4() {
    let x = 0,
        y = 0;

    x = Number(prompt('Digite um número: '))
    y = Number(prompt(`Digite uma potenciação para ${x}`))

    potenciacao(x, y);
}

function potenciacao(x, y) {
    let potencia = x ** y
    let resultado = `${x} elevado à ${y} é igual à `;

    for (let i = 0; i < y; i++) {
        resultado += ` ${x} *`
    }

    resultado = resultado.slice(0, -1) + ' = '

    resultado += potencia

    document.getElementById('resultado').textContent = resultado
}

let el = document.getElementById('ex4');
el.onclick = execicio4;