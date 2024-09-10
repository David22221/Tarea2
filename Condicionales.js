const numero1 = 10;
const numero2 = 20;
const numero3 = 30;


if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El numero mayor es:", numero1);
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El numero mayor es:", numero2);
  } else {
    console.log("El numero mayor es:", numero3);
  }

  if (numero1 <= numero2 && numero1 <= numero3) {
    console.log("El numero menor es:", numero1);
  } else if (numero2 <= numero1 && numero2 <= numero3) {
    console.log("El numero menor es:", numero2);
  } else {
    console.log("El numero menor es:", numero3);
  }

  if (numero1 % 2 === 0) {
    console.log(`El numero1 ${numero1} es par.`);
  } else {
    console.log(`El numero1 ${numero1} es impar.`);
  }

  if (numero2 % 2 === 0) {
    console.log(`El numero2 ${numero2} es par.`);
  } else {
    console.log(`El numero2 ${numero2} es impar.`);
  }

  if (numero3 % 2 === 0) {
    console.log(`El numero3 ${numero3} es par.`);
  } else {
    console.log(`El numero3 ${numero3} es impar.`);
  }

  if (numero1 % 5 === 0) {
    console.log(`El numero1 ${numero1} es múltiplo de 5.`);
  } else {
    console.log(`El numero1 ${numero1} no es múltiplo de 5.`);
  }

  if (numero2 % 5 === 0) {
    console.log(`El numero2 ${numero2} es múltiplo de 5.`);
  } else {
    console.log(`El numero2 ${numero2} no es múltiplo de 5.`);
  }

  if (numero3 % 5 === 0) {
    console.log(`El numero3 ${numero3} es múltiplo de 5.`);
  } else {
    console.log(`El numero3 ${numero3} no es múltiplo de 5.`);
  }