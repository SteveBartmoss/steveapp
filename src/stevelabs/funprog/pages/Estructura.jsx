import React from "react";

function Prog1Estructura() {
    return (
        <>
            <div className="div-curso">
                <p>
                    Estructura de un programa en c

                    La estructura básica de un programa en c está compuesta por los archivos de cabecera, la función main y el cuerpo de la función main, estos son los elementos básicos del programa que vimos anteriormente (hola mundo) y en su mayoría mucho programas se componen de lo mismo.

                    Archivos de cabecera

                    Los archivos de cabecera también llamados librerías son archivos que contienen código de lenguaje c pero que está presente en programa que creamos, más bien lo incluimos en el código al declararlo con la siguiente sintaxis:

                    De esta manera el compilador sabe que en esa parte debe colocar código que no está presente en nuestro archivo que contiene la función main, si no que debe buscar lo en un archivo con el nombre declarado en la directiva include. En el ejemplo anterior usamos la función printf sin tener que declararla o sin tener que escribir la palabra printf previamente, la razón es simple la función printf pertenece a la librería stdio.h y al usar include al inicio del programa le estamos diciendo al compilador que busque el archivo stdio.h y copié todo su contenido dentro de nuestro programa de hola mundo. De esta manera el programa ya puede saber a que hace referencia printf y puede ejecutar las líneas de código que permiten imprimir en pantalla el mensaje que queremos, si bien los archivos de cabecera pueden parecer confusos por ahora más adelante tendrán más sentido y también permitirán hacer menos trabajo a la hora de programar.

                </p>
            </div>
        </>
    );
}

export default Prog1Estructura;