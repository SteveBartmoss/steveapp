import React from "react";
import { DivCenter, DivCode, DivCurso, DivRead, DivTitle } from "../../../component/Contenedores/Cajas";

export function Prog1HolaMundo() {

    const code= `#include <stdio.h>;
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
                            <p className="code-simple">{code}</p>
                        </DivCode>
                    </DivCenter>

                </DivRead>
            </DivCurso>
        </>
    );
}