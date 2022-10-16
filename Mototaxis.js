//Declaración de variable conversion: 1 milla = 1.60934 Km
let conv = 1.60934; 

//Funcionamiento del Programa:

console.log("¡Bienvenido al sistema de conversion de millas a kilometros!");

//Usamos la propiedad Stdin para la lectura de datos con Node.js a traves del teclado
console.log("Ingresa el numero de millas recorridas: ");
const stdin = process.openStdin();

//Hacemos la conversion de millas dentro de una funcion flecha y mostramos en pantalla
stdin.addListener("data", (data) => {
    data = data * conv;
    console.log("El numero de kilometros recorridos es por: " + data.toString());
    process.exit();
})
