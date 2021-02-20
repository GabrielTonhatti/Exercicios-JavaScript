function calc() {
    let altura, BaseMaior, BaseMenor, area
    altura = Number(document.getElementById("altura").value)
    BaseMaior = Number(document.getElementById("BaseMaior").value)
    BaseMenor = Number(document.getElementById("BaseMenor").value)
    area = ((BaseMaior + BaseMenor) * altura) / 2
    document.getElementById("resultado").innerHTML = `A área do trapezio é ${area.toFixed(2)} m²`
}