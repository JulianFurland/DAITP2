let textoEntrada01 = "Escuela", textoEntrada02 = "ORT";
let textoSalida;
textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear();
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert (texto1, texto2){
    let concat = texto1 + texto2;
    let returnValue = '';
    for (let i = concat.length -1; i >= 0; i--) {
        returnValue += concat[i];
    }
    return returnValue;
}

