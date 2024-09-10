function sumarray(array){
    let a = 0
    for (let i=0;i< array.length;i++){
        a += array[i]

    }
    return a

}

const numeros = [1, 2, 3, 4, 5]
console.log(sumarray(numeros))

function promedio(array){
    const suma= sumarray(array)
    return suma / array.length
}

console.log(promedio(numeros))

function arraymayusculas(array){
    let array2 = []
    for(let i=0; i<array.length;i++){
        array2.push(array[i].toUpperCase())
    }
    return array2
}

const arraypalabras = ["holaa", "chaoo"]

console.log(arraymayusculas(arraypalabras))

function numerospares(numero){
    let pares = []
    for(let i=0; i<numero.length;i++){
        if(numero[i]%2 == 0){
            pares.push(numero[i])
        }
    }
    return pares
}

console.log(numerospares(numeros))

