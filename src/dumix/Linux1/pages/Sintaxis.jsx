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
            es la ruta por defecto que se utiliza al abrir una nueva terminal, que es el directorio home
            del usuario y que se explicara mas en una proxima seccion para entender mas sobre los directorios
            en linux volviendo al comando anteriormente mostrado se trata de un simple comando que muestra tanto 
            los archivos como las carpetas que contiene lo cual es util para conocer el nombre de un archivo
            con el que trabajaremos.</p>

            <p className="Content">Normalmente los comandos tiene su nombre segun lo que hacen o si la persona
            que lo creo piensa que el nombre es adecuado de esta manera se puede recordar lo que hace el comando
            con facilidad en el ejemplo anterior el comando lista el contenido con lo cual se puede asociar listar
            y poder recordarlo facilmente, la mayoria de comandos son case sensitive por lo cual diferencian 
            mayusculas de las minusculas y en el ejemplo anterior si ingreamos el comando en mayusculas LS dira
            que no encontro el comando y por eso es importante saber diferenciar como se escribe correctamente.</p>

            <p className="Content">Muchos comandos siguen el siguiente partron</p>

            <div className="center">
                <div className="div-code">
                    <p className="code-simple">comando [opciones] [argumentos]</p>
                </div>
            </div>

            <p className="Content">Generalmente se escribe el comando y luego se colocan las opciones y a 
            continuacion se ponen los argumentos, las opciones cambian el comportamiento del comando ya sea 
            agregando mas informacio al resultado o filtrando los resultados del comando por otro lado los 
            argumentos se tratan de los elementos sobre los que se aplicara el comando generalmente se utilizan 
            estas reglas para los comandos pero esto puede variar al existir comandos que no reciben argumentos 
            o que no tienen opciones.</p>

            <p className="title1">Argumentos</p>
            
            <p className="Content">En el ejemplo mostrado al inicio se ejecuto el comando sin usar ningun agumento
            y por eso mostro la salida </p>

        </div>
    );
}

export default Sintaxis;