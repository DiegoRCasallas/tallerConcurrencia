console.log("leyendo script.js");

/*Ejercicio : Procesar archivos
Actividad Síncrona:
Tienes una lista de nombres de archivos y debes procesarlos
uno por uno simulando que cada archivo tarda 2 segundos en procesarse.*/

function procesarArchivo(nombre) {
    console.log(`Procesando archivo: ${nombre}`);
    const inicio = Date.now();
    while (Date.now() - inicio < 2000) { } // Bloqueo de 2 segundos (simulación)
    console.log(`Archivo procesado: ${nombre}`);
}

const archivos = ["archivo1.txt", "archivo2.txt", "archivo3.txt"];
archivos.forEach((archivo) => procesarArchivo(archivo));

/*
SALIDA ESPERADA EN CONSOLA:

Procesando archivo: archivo1.txt
Procesando archivo: archivo2.txt
Procesando archivo: archivo3.txt
Archivo procesado: archivo1.txt
Archivo procesado: archivo2.txt
Archivo procesado: archivo3.txt

*/
