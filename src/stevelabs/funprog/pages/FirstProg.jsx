import React from "react";
import { DivCenter, DivCode, DivCurso, DivRead, DivTitle } from "../../../component/Contenedores/Cajas";

export function Prog1HolaMundo() {
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

                </DivRead>
            </DivCurso>
        </>
    );
}