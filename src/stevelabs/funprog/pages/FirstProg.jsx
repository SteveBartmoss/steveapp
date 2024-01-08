import React from "react";
import { DivCenter, DivCode, DivCurso, DivRead, DivTitle } from "../../../component/Contenedores/Cajas";

export function Prog1HolaMundo() {

    const code = `#include <stdio.h>;
                int maint (){
                    printf('"'Hola mundo '"');
                    return 0;
                }`
    return (
        <>
            <DivCurso>
                <DivRead>
                    <DivTitle>
                        <h1 className="title-subject">Pimer programa en C</h1>
                        <hr className="line" />
                    </DivTitle>

                    <p className="content-curso">
                        Por una tradicion el primer programa que se suele proponer en las
                        primeras clases de programacion es el algo llamado hola mundo ya que
                        este fue uno de los primeros programas que se desarrollo.
                    </p>

                    <p className="content-curso">
                        Para esta implementacion basta con crear un nuevo archivo en nuestra computadora
                        esto lo podemos usar de diferentes maneras ya que si estamos en windows podemos
                        abrir vs code e ir al menu Archivo/Nuevo nuevo archivo y esto nos abrira una ventana
                        para poner el nombre nuestro archivo en el cual tenemos que usar la extension .c luego
                        no dejara seleccionar la ubicacion en la que guardar el archivo.
                    </p>

                    <p className="content-curso">
                        En el caso de estar en un sistema linux podemos usar el comando touch para crear
                        el archivo en la ruta en la que no encontramos usando el comando como se muetra
                        a continuacion:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">touch hola.c</p>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        En caso de que usemos un IDE como code blocks, clion o cualquier otro debe existir
                        un menú archivo y en el seleccionamos crear y le damos un nombre que queremos y luego
                        de esto se debe abrir en la misma ventan que tenemos para abierta en el ide.
                        Si eres de la vieja escuela o simplemente te gusta el camino difícil y usas block de
                        notas, vim, nano o algun otro editor de texto para los hardcore, basta con que crees
                        un archivo punto c y luego lo edites con el block de notas, vim o nano.
                    </p>

                    <p className="content-curso">
                        Ya que tenemos nuestro archivo creado debemos copiar las siguientes lines de codigo en
                        el archivo .c o el que tengamos abierto en nuestro editor de texto o IDE.
                    </p>

                    <DivCenter>
                        <DivCode>
                            <code>
                                <p className="code-simple">#include &lt;stdio.h&gt;</p>
                                <p className="code-simple">int maint&#40; &#41;</p>
                                <p className="code-simple">&#123;</p>
                                <p className="code-simple">printfmaint&#40;"Hola mundo"&#41;;</p>
                                <p className="code-simple">return 0;</p>
                                <p className="code-simple">&#125;</p>
                            </code>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Una vez que tenemos el codigo en nuestro archivo basta con guardarlo
                        y podemos proceder a compilar el codigo.
                    </p>

                    <p className="content-curso">
                        Para llevar a cabo el compilado de nuestro codigo tendremo que llamar a
                        un compilador pero si nos encontramos en usando un IDE basta con buscar
                        en la barra superior un boton que normalmente tiene el icono de una flecha
                        verde o que debe llamarse run&compile el cual nos dejara compilar nuestro
                        codigo.
                    </p>

                    <p className="content-curso">
                        Si usamo un editor de codigo esto no sera tan simple ya que tenemos que usar el
                        compilador de forma separada mediante la terminal de nuestro sistema operativo,
                        si usamos una distribucion de linux podemo probar con el comando cntrl+t o si esto
                        funciona podemos buscar terminal, en windows se puede buscar como cmd o poweshell.
                    </p>

                    <p className="content-curso">
                        Ya que tenemos nuestra terminal abierta debemos situarnos en la ruta donde tenemos el
                        archivo .c para lo cual tenemos dos opciones, podemos usar el comando cd seguido de la ruta
                        para navegar por los directorios hasta situarnos en el que esta el archivo con el codigo o tambien
                        podemos escribir el comando cd y luego arrastrar la carpeta hasta la terminal lo cual pondra la
                        ruta en la terminal y solo debemos dar enter.
                    </p>

                    <p className="content-curso">
                        Ahora que estamos en la misma ruta del codigo fuente podemos usar el comando del compilador para
                        generar el archivo binario de nuestro programa, para esto debemos usar el siguiente comando:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">gcc -o hola.c</p>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Una vez ejecutado el comando podemos ver que tenemos un prama con el nombre hola el cual es el 
                        ejecutable o nuestro programa el cual podemos ejecutar escribiendo el nombre del mismo en la terminal 
                        con lo cual deberiamos ver la siguiente salida en pantalla:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <p className="code-simple">Hola mundo</p>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Si podemos ver el mensaje en la terminal entonces todo ha salido bien, Felicidades creaste tu 
                        primer progama. En la siguiente seccion veremos las pertes de este programa para entender que 
                        es cada una.
                    </p>

                    <DivTitle>
                        <h1 className="title-subject">Analizando las lineas de codigo</h1>
                        <hr className="line" />
                    </DivTitle>

                    <p className="content-curso">
                        La primera linea de codigo se trata de la importacion librerias que es la siguiente:
                    </p>

                    <DivCenter>
                        <DivCode>
                            <code>
                                <p className="code-simple">#include &lt;stdio.h&gt;</p>
                            </code>
                        </DivCode>
                    </DivCenter>


                </DivRead>
            </DivCurso>
        </>
    );
}