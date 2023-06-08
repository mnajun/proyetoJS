let nombre = prompt(" Hola alumno, bienvenido a la Universidad de Harvard, podria decirme su nombre?");
console.log(" nombre " + nombre);
let nota1 = parseFloat(prompt(" Hola, " + nombre + ". Podrias ingresar la nota de tu primer parcial? "));
console.log(" parcial 1 = " + nota1)
let nota2 = parseFloat(prompt(" Perfecto, ahora podrias indicarme la nota de tu segundo parcial por favor?"));
console.log(" parcial 2 = " + nota2)
let nota3 = parseFloat(prompt(" Vamos mas que bien. Por ultimo indicame la nota de tu ultimo parcial"));
console.log(" parcial 3 = " + nota3)

let promedio = (nota1 + nota2 + nota3) / 3;
console.log(" promedio = " + promedio)

if (promedio < 4) {
    alert("Tu promedio es " + promedio + ". Estuviste muy flojo, no te estas esforzando lo suficiente. Debes recursar la materia, lo siento -.-' .");
    console.log(" reprobado ");
}

else if (promedio >= 4 && promedio <= 7) {
    alert(" Tu promedio es " + promedio + ". Vienes bien, pero se que puedes hacerlo mejor. No te dejes estar y preparate para el final");
    console.log(" a final ");
}

else if (promedio > 7 && promedio <= 10) {
    alert(" Felicitaciones, " + nombre + ", lo estas haciendo muy bien. Has promocionado la materia. Sigue asi, y nos vemos el cuatrimetre que viene ^.^");
    console.log(" promociono ");
}

else {
    alert(" Ha ocurrido un error, por favor, ingresa notas validas. ");
    console.log(" datos mal cargados ");
}

// Reiniciar el ciclo

while (true) {


    let nombre = prompt(" Hola alumno, bienvenido  nuevamente a la Universidad de Harvard. ¿Podrías decirme tu nombre?, o presiona cancelar para salir ");

    if (nombre === null) {
        break; // Detener el bucle si se cancela la operación
    }
    console.log(" nombre: " + nombre);


    let nota1 = parseFloat(prompt("Hola, " + nombre + ". ¿Podrías ingresar la nota de tu primer parcial?"));
    console.log(" parcial 1 = " + nota1);



    let nota2 = parseFloat(prompt("Perfecto, ahora podrías indicarme la nota de tu segundo parcial, por favor?"));
    console.log(" parcial 2 = " + nota2);

    let nota3 = parseFloat(prompt("Vamos muy bien. Por último, indícame la nota de tu último parcial"));
    console.log(" parcial 3 = " + nota3);

    let promedio = (nota1 + nota2 + nota3) / 3;
    console.log(" promedio = " + promedio);

    if (promedio < 4) {
        alert(" Tu promedio es " + promedio + ". Estuviste muy flojo, no te estás esforzando lo suficiente. Debes recursar la materia, lo siento -.-'.");
        console.log(" reprobado ");
    } else if (promedio >= 4 && promedio <= 7) {
        alert(" Tu promedio es " + promedio + ". Vienes bien, pero sé que puedes hacerlo mejor. No te dejes estar y prepárate para el final");

        console.log(" a final ");
    } else if (promedio > 7 && promedio <= 10) {

        alert
        alert("Felicitaciones, " + nombre + ", lo estás haciendo muy bien. Has promocionado la materia. Sigue así, y nos vemos el próximo cuatrimestre ^.^");
        console.log(" promociono ");
    } else {

        alert
        alert("Ha ocurrido un error, por favor, ingresa notas válidas.");
        console.log(" datos mal cargados ");
    }
}
console.log(" fin de las consultas de promedio ");
/// finaliza por pedido del usuario