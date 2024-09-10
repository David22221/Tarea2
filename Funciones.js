function mayusculas(palabra){
    return palabra.toUpperCase()
}

const palabra = "hola"
console.log(mayusculas(palabra))

function minuscula(palabra){
    return palabra.toLowerCase()
}
const palabraa = "HOLAA"
console.log(minuscula(palabraa))

function resta(numero1,numero2){
    a = numero1 - numero2
    return a
}

function dividir(numero1,numero2){
    a = numero1 / numero2
    return a
}

function multiplicacion(numero1,numero2){
    a = numero1 * numero2
    return a
}

const numero1 = 15
const numero2 = 5

console.log(resta(numero1,numero2))
console.log(dividir(numero1,numero2))
console.log(multiplicacion(numero1,numero2))


function longitud(palabra){
    return palabra.length
}

console.log(longitud(palabraa))