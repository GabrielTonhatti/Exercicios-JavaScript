function tabuada() {
    let num = 0, multi = 0

    num = Number(prompt('Digite o número que deseja ver a tabuáda: '))

    for (let i = 1; i <= 10; i++) {
        let resc = 'resultado' 
        let resn = i.toString()
        let res = resc.concat(resn)
        multi = num * i
        document.getElementById('tabuada').innerHTML = `Tabuada do ${num}`
        document.getElementById(res).innerHTML = `${num} X ${i} = ${multi}`
    }
}
