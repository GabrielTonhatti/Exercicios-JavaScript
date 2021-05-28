function exercicio3() {

    let x = 0,
        y = 0,
        z = 0;

    x = Number(prompt(`Digite o 1º número:`))
    y = Number(prompt(`Digite o 2º número:`))
    z = Number(prompt(`Digite o 3º número:`))

    maiorNum(x, y, z)
}

function maiorNum(x, y, z) {
    if (x > y && x > z) {
        alert(`O maior número é ${x}`)
    } else if (y > x && y > z) {
        alert(`O maior número é ${y}`)
    } else {
        alert(`O maior número é ${z}`)
    }
}

let el = document.getElementById('ex3');
el.onclick = exercicio3;