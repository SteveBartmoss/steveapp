import React from "react";
import { DivCenter, DivCode, DivCurso, DivRead } from "../../../component/Contenedores/Cajas";

function Prog1Output() {
    return (
        <>

            <DivCurso>
                <DivRead>
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

                    <DivCenter>
                        <DivCode>
                            <div className="div-lines-code">
                                <p className="code-line">#include &lt;stdio.h&gt;</p>
                                <p className="code-line">int maint&#40; &#41;</p>
                                <p className="code-line">&#123;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"Bievenido"&#41;;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"Selecciona una opcion"&#41;;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"1 sumar dos numeros"&#41;;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"2 restar dos numeros"&#41;;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"3 multiplicar dos numeros"&#41;;</p>
                                <p className="code-line ident-1rem">printfmaint&#40;"4 dividir dos numeros"&#41;;</p>
                                <p className="code-line ident-1rem">return 0;</p>
                                <p className="code-line">&#125;</p>
                            </div>
                        </DivCode>
                    </DivCenter>

                    <p className="content-curso">
                        Si todo salio correcto en la pantalla podemos ver una especie menu que no indica
                        opciones que pedemos llebar acabo en el programa lo cual puede parecer anticuado
                        o incluso algo tonto pero esta es la forma mas simple en que un programa puede
                        interactuar con un programa.
                    </p>

                    <p className="content-curso">
                        Mediante la instruccion printf podemos imprimir en pantalla lo que queremos
                        que el usuario interacctue, de esta menera podemos mostrar menus o formularios
                        para el que el usuario pueda interactuar con el programa, esta es una de las primeras
                        formas en que los usuarios interactuaban con las computadoras y actualmente est sigue
                        pasando cuando ejecutamos cualquier comando de la terminal.
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
                        nuestro codigo fuente esto lo podemos comprobar mirando la el promp de la termianl que son
                        las letras que aparecen en las pantalla como se muestra en el ejemplo
                    </p>
                </DivRead>
            </DivCurso>
        </>
    );
}

export default Prog1Output;