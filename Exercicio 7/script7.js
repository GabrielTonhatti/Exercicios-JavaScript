function calc() {
    let peso, emagrecer, engordar
    peso = Number(document.getElementById("peso").value)
    emagrecer = peso - (peso * 0.2)
    engordar = peso + (peso * 0.15)
    document.getElementById("resultado").innerHTML = `Seu novo peso sera de ${engordar} caso você engorde 15%.`
    document.getElementById("resultado2").innerHTML = `Seu novo peso sera de ${emagrecer} caso você emagreça 20%.`
}