import React from "react";

function Sintaxis(){
    return(
        <div className="div-curso">
            <h1 className="title1">Sintaxis de los comandos</h1>

            <p className="Content">Un comando se trata basicamente de un programa que es llamado
            desde la terminal asi que basicamnete el sistema operativo lee la entrada de la terminal
            de comandos y procesa los datos para llamar a un programa instalado para luego mostrar
            los resultados en pantalla, las tareas que se pueden ejecutar son variadas y van desde mostrar
            los archivos de un directrio hasta desactivar tarjetas de red o modulos del sistema por lo cual
            conocer el uso de comandos resulta util cuando se trabaja con tarea de administracion del
            sistema.</p>

            <p className="Content">Para ejecutar un comando basta con escribir su nombre en la termina
            y pulsar la tecla enter el comando debe estar correctamente escrito para funcionar o en su
            defecto se marcara un error, uno de los comandos mas basicos que puede ejecutar es ls y para 
            hacerlo basta con situarse en la terminal y escribir ls y pulsar la tecla enter la terminal
            deberia mostrar algo como esto </p>

            <div className="cli">
                <div className="title-cli">
                    <center>
                        <p className="Content">Terminal</p>
                    </center>
                </div>
                <div className="body-cli">
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>~<span className="Content">$ ls</span></p>
                    <p className="Content">Descargas Escritorio Musica Publico Documentos</p>
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>~<span className="Content">$</span></p>
                </div>
            </div>

            <p className="Content">El resultado puede varias ya que el comando muestra el contenido de un
            directorio y en le ejemplo anterior se asume que el directorio desde el que se usa el comando 
            es la ruta por defecto que se utiliza al abrir una nueva terminal</p>


        </div>
    );
}

export default Sintaxis;