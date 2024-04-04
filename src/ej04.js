import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivoentrada.txt";
const ARCHIVO_SALIDA = "./archivosalida.txt";
copiar(ARCHIVO_ENTRADA,ARCHIVO_SALIDA);

function callback(err) {
    if (err) throw err;
    console.log('Archivo copiado con éxito');
}
function copiar(entrada, salida){
    fs.copyFile(entrada,salida,callback)
}