//Declaración de variables, para el año actual y la serie de preguntas en un arreglo
var tiempo = 2022;
var preguntas = ['¿Cuál es tu nombre?:  ',
                 '¿En que año naciste?: '];

//Repuestas en un arreglo para las preguntas
var respuestas = [];

//Imprimir las preguntas
function pregunta(i){
    process.stdout.write(preguntas[i]);
}

//Responder las preguntas con ayuda de Stdin
process.stdin.on('data', function(data){
    respuestas.push(data.toString().trim());

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }else{
        respuestas[1] = tiempo - respuestas[1];
        console.log("¡Mucho Gusto! " + respuestas[0] + ", tu tienes " + respuestas[1] + " años");
        process.exit();
    }
});

pregunta(0);