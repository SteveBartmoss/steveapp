import React from "react";

function Prog1Output() {
    return (
        <>
            <div className="div-curso">

                <div className="center">
                    <h1 className="title-subject">Salida estándar (standar output)</h1>
                </div>

                <p className="content-curso">
                    La salida estándar de un programa simple suele ser la pantalla de
                    la computadora y por tradición el primer programa que suelen desarrollar
                    es el ejércicio conocido como hola mundo, este es bastante simple pues
                    solo consiste en mostrar por pantalla el mensaje hola mundo o cualquier
                    otro mensaje que se elija. Anterior mente en la programación era bastante
                    común que solo se interactuara con el usuario mediante la impresion en
                    pantalla y de hecho las primeras computadoras se utilizaban medíante
                    comandos que los usuarios ingresaban, en este curso los programas que
                    crearemos serán este tipo ya que es forma más simple de interactuar con
                    el usuario.
                </p>

                <div className="center"> 
                    <h1 className="title-subject">La instruccion printf en C</h1>
                </div>

                <p className="content-curso">
                    En la mayoría de lenguajes existe una función que imprime valores en una
                    terminal o consola, en el lenguaje c printf es la encargada de lograr
                    esto y para usarla solo se debe llamar a las librerías correctas y mandarla
                    a llamar en nuestro Main. Todo lo anterior pude parecer complejo y también
                    desconocido pero por el momento basta con copiar el código que se muestra
                    a continuación:
                </p>

                <p className="content-curso">
                    Una vez que lo copiamos debemos crear un archivo con terminación .c en el 
                    editor de código que usemos, si se trata de vscode podemos usar el menú 
                    archivo nuevo Archivo y darle el nombre, en un IDE como code blocks, clion 
                    o cualquier otro debe existir un menú archivo y en el seleccionamos crear y 
                    le damos un nombre con la terminación punto c. Si eres de la vieja escuela o 
                    simplemente te gusta el camino difícil y usar block de notas, vim, nano o algun 
                    otro editor de texto para los hardcore, basta con que crees un archivo punto c 
                    y luego lo edites con el block de notas, vim o nano. El comando para crear un 
                    archivo en Linux es touch nombre.c en Windows basta con abrir block de notas 
                    copiar el código, guardar como, seleccionas el tipo de archivo como todo y 
                    pones el nombre del archivo y .c con eso ya tendrás el código.
                </p>

                <div className="center">
                    <h1 className="title-subject">Cómo compilar y ejecutar el código</h1>
                </div>

                <p className="content-curso">
                    El proceso de compilar es una llamada a otro programa llamado compilador 
                    este programa se encarga de pasar el lenguaje de programación a lenguaje máquina, 
                    esto se tiene que hacer porque la computadora no sabe otro lenguaje que 
                    no sea unos y ceros pero las personas no escribimos nuestro código en unos y ceros.
                </p>

                <div className="center">
                    <h1 className="title-subject">Cómo compilar desde terminal con gcc</h1>
                </div>

                <p className="content-curso">
                    En ambientes Linux o Mac OS se puede utilizar el programa gcc el cual 
                    es un compilador de c y c++, normalmente su uso es mediante la línea 
                    de comando y también tiene su versión para Windows que se llama wingw 
                    el cual también se suele usar mediante la línea de comandos.
                    Para usar la línea de comandos basta con abrir una nueva terminal con 
                    el comando cntrl T en Ubuntu o buscar la aplicación terminal, en Windows 
                    se puede buscar la aplicación powershell o cmd en la barra de busque de windows, 
                    una vez dentro debemos verificar en que directorio estamos lo cual puede 
                    ser mediante un comando o visualmente ya que el promp del terminal indica 
                    en qué ruta nos encontramos el cual deberia verse algo asi:
                </p>

                <p className="content-curso">
                    Para el caso de linux o MacOs steve@steve-HP-Notebook
                </p>

                <p className="content-curso">
                    Para windows c:\users\prail 
                </p>

                <p>
                    Si bien esto no es un tutorial para linea de comandos se puede hacer un repaso de los 
                    siguientes comandos que no seran utiles: cd (chamge direcoty) nos permite movernos a otro 
                    directorio colo cando el nombre del directorio (carpeta) como podria ser cd home, que indica 
                    que entraremos a la carpea home, para salir un nivel o un directorio podemos usar cd .. que
                    nos regresa una capeta arriba. Para ver la ruta actual en la que estamos podemos usar pwd 
                    que nos imprime la ruta en la que se encuentra el terminal actualmente, estos comandos 
                    suelen usarse en linux pero si estas en windows puedes usar powershell que tiene mas compativildad
                    con los comandos de linux. 
                </p>

                <p>
                    Para poder compilar el programa debemos estar en la misma carpeta en la que se encuentra 
                    nuestro codigo fuente
                </p>
            </div>
        </>
    );
}

export default Prog1Output;