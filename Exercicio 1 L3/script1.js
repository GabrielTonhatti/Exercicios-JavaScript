function bubbleSort() {

    for (let i = 1; i <= 5; i++) {
        let a, b, c, d, x;
        a = Number(prompt('Digite um valor qualquer para A'))
        b = Number(prompt('Digite um valor qualquer para B'))
        c = Number(prompt('Digite um valor qualquer para C'))
        d = Number(prompt('Digite um valor qualquer para D'))
        let A = a
        let B = b
        let C = c
        let D = d

        for (let j = 1; j <= 3; j++) {
            if (a > b) {
                x = b
                b = a
                a = x
            }
            if (b > c) {
                x = c
                c = b
                b = x
            }
            if (c > d) {
                x = d
                d = c
                c = x
            }
        }
        document.getElementById('resultado').innerHTML += `${i}º Ordem digitada: <br/> a = ${A} <br/> b = ${B} <br/> c = ${C} <br/> d = ${D} <br/> ${i}º Ordem crescente: <br/> a = ${a} <br/> b = ${b} <br/> c = ${c} <br/> d = ${d}<br/> ${i}º Ordem decrescente: <br/> a = ${d} <br/> b = ${c} <br/> c = ${b} <br/> d = ${a}<br/>`
    }
}