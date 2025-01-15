// Importar el módulo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Función para leer un archivo
function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error leyendo el archivo:', err);
      return;
    }
    console.log('Contenido del archivo:', data);
  });
}
// Llamar a la función con la ruta del archivo
readFile('extension.pdf');
