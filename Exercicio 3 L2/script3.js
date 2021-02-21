function calc() {
    let firstnumber, secondnumber
    firstnumber = Number(document.getElementById('firstnumber').value)
    secondnumber = Number(document.getElementById('secondNumber').value)
    
    if (firstnumber < secondnumber){
        document.getElementById('resultado').innerHTML = `O menor número é ${firstnumber}!`
    }
    else{
        document.getElementById('resultado').innerHTML = `O menor número é ${secondnumber}!` 
    }
}