let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

//Celsius --> Fahrenheit and Kelvin
celsiusInput.addEventListener('input', function(){
    let celTemp = parseFloat(celsiusInput.value)
    let fahTemp = (celTemp*(9/5)) + 32
    let kelTemp = celTemp +  273.15

    fahrenheitInput.value = roundNumber(fahTemp)
    kelvinInput.value = roundNumber(kelTemp)
})

//Fahenheit --> Celsius and Kelvin
fahrenheitInput.addEventListener('input', function(){
    let fahTemp = parseFloat(fahrenheitInput.value)
    let celTemp = (fahTemp - 32) * (5/9)
    let kelTemp = (fahTemp - 32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(celTemp)
    kelvinInput.value = roundNumber(kelTemp)
})

//Kelvin --> Celsius and Fahrenheit
kelvinInput.addEventListener('input', function(){
    let kelTemp = parseFloat(kelvinInput.value)
    let celTemp = kelTemp - 273.15
    let fahTemp = (kelTemp - 273.15) * (9/5) +32

    celsiusInput.value = roundNumber(celTemp)
    fahrenheitInput.value = roundNumber(fahTemp)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})