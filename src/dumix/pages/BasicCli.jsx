import React from "react";
import { DivArticle, DivCenter, DivCurso, DivFlex, DivRead, Paper } from "../../component/Contenedores/Cajas";

export function BasicCli() {
    return (
        <>
            <Paper>
                <DivCenter>
                    <h1 className="title-1">Comandos basicos de linux</h1>
                </DivCenter>

                <DivArticle>
                    <DivRead>
                        <p className="p-main">
                            La mejor forma de usar Linux es mediante comandos y a 
                            continuación se muestran algunos de los más escenciales 
                            a la hora de usar un sistema Linux.
                        </p>
                    </DivRead>
                </DivArticle>

                <p>
                    cd: este comando permite al usuario cambiar entre rutas de las terminal, haciendo cd documentos entraremos a la carpeta documentos, siempre y cuando estemos en el mismo nivel de la carpeta, si queremos salir da la carpeta actual podemos hacer lo con cd .. lo cual nos dejara un nivel arriba.
                    ls: este comando listara el contenido de la carpeta en la que nos encontramos, esto nos permitirá ver qué archivo queremos ejecutar o hacía que carpeta debemos navegar, este comando recibe argumentos que modificaran la salida como ls -l que mostrará el listado largo o ls -a que mostrará todos los archivos.
                    touch: este comando permite crear un archivo en la carpeta o ruta actual en la que estamos y también puede cambiar las marcas de tiempo del archivo, pero la verdad esto último no lo había utilizado y es posible que el mayor uso que le des sea para crear archivos. Para crear el archivo basta con usar touch nombrearchivo y poner la extensión que queremos que tenga, se pueden generar más de un archivo a la vez si lo deseamos.
                    apt update: este comando actualiza las lista de los paquetes disponibles para nuestro sistema pero no instala nada, se puede ver como un comando para apuntar a los paquetes nuevos que después actualizaremos.
                    apt upgrade: este comando toma la lista actualizada de los paquetes disponibles y los instala, así que podemos decir que ambos comandos van unidos así que la gente prefiere usar apt update && upgrade para lanzar los comando uno detrás del otro. Ambos comandos requieren permisos de súper usuario así que debemos estar en una cuenta root o agregar sudo antes de los comandos.
                    rm: este comando permite eliminar un archivo pero hay que usarlo con cautela ya que eliminara el archivo sin preguntar antes o esperar una confirmación, se puede pasar el parámetro -r para que la llamada sea recursiva lo cual permite borrar los archivos y las subcarpetas así que también es peligroso.
                    mv: este comando permite mover una archivo o fichero hacía otra ruta la cual recibe como argumento, para utilizar debemos pasar el nombre del archivo o directorio a mover, seguido de la ruta en que se encuentra el archivo y luego la ruta hacia la que queremos mover el archivo. Este comando es similar a cortar y pegar así que no se mantendrá una copia del archivo o fichero en la ruta origen.
                    cp: este comando también permite mover un archivo pero tiene la diferencia de que crea una copia del archivo en la ruta destino, se usa de manera similar al anterior ya que debemos pasar el nombre del archivo, la ruta de origen y luego la ruta destino.
                    pwd: este comando te permite mostrar la ruta actual en la que te encuentras, esto es util para saber en qué nivel te encuentras y poder moverte hacia otro directorio con el comando cd.
                    apt install: este comando permite instalar aplicaciones mediante el manejador de parques apt, debemos pasar como argumento el nombre del paquete por ejemplo apt install vim, requiere permisos de root para poder ejecutarse.
                    mkdir: este comando permite crear un directorio con el nombre que le pasemos como argumento,
                </p>
            </Paper>
        </>
    );
}