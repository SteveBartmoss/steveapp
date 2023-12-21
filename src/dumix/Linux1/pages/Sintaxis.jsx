import React from "react";
import { DivCurso, DivRead } from "../../../component/Contenedores/Cajas";

function Sintaxis() {
    return (
        <DivCurso>
            <DivRead>
                <div className="center">
                    <h1 className="title-subject">Sintaxis de los comandos</h1>
                </div>

                <hr className="line" />

                <p className="content-curso">Un comando se trata basicamente de un programa que es llamado
                    desde la terminal asi que basicamnete el sistema operativo lee la entrada de la terminal
                    de comandos y procesa los datos para llamar a un programa instalado para luego mostrar
                    los resultados en pantalla, las tareas que se pueden ejecutar son variadas y van desde mostrar
                    los archivos de un directrio hasta desactivar tarjetas de red o modulos del sistema por lo cual
                    conocer el uso de comandos resulta util cuando se trabaja con tarea de administracion del
                    sistema.</p>

                <p className="content-curso">Para ejecutar un comando basta con escribir su nombre en la termina
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
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls</span></p>
                        <p className="Content"><span className="directorio">Descargas Documentos Escritorio Musica Publico</span></p>
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                    </div>
                </div>

                <p className="content-curso">El resultado puede varias ya que el comando muestra el contenido de un
                    directorio y en le ejemplo anterior se asume que el directorio desde el que se usa el comando
                    es la ruta por defecto que se utiliza al abrir una nueva terminal, que es el directorio home
                    del usuario y que se explicara mas en una proxima seccion para entender mas sobre los directorios
                    en linux volviendo al comando anteriormente mostrado se trata de un simple comando que muestra tanto
                    los archivos como las carpetas que contiene lo cual es util para conocer el nombre de un archivo
                    con el que trabajaremos.</p>

                <p className="content-curso">Normalmente los comandos tiene su nombre segun lo que hacen o si la persona
                    que lo creo piensa que el nombre es adecuado de esta manera se puede recordar lo que hace el comando
                    con facilidad en el ejemplo anterior el comando lista el contenido con lo cual se puede asociar listar
                    y poder recordarlo facilmente, la mayoria de comandos son case sensitive por lo cual diferencian
                    mayusculas de las minusculas y en el ejemplo anterior si ingreamos el comando en mayusculas LS dira
                    que no encontro el comando y por eso es importante saber diferenciar como se escribe correctamente.</p>

                <p className="content-curso">Muchos comandos siguen el siguiente partron</p>

                <div className="center">
                    <div className="div-code">
                        <p className="code-simple">comando [opciones] [argumentos]</p>
                    </div>
                </div>

                <p className="content-curso">Generalmente se escribe el comando y luego se colocan las opciones y a
                    continuacion se ponen los argumentos, las opciones cambian el comportamiento del comando ya sea
                    agregando mas informacio al resultado o filtrando los resultados del comando por otro lado los
                    argumentos se tratan de los elementos sobre los que se aplicara el comando generalmente se utilizan
                    estas reglas para los comandos pero esto puede variar al existir comandos que no reciben argumentos
                    o que no tienen opciones en el ejemplo mostrado al inicio se ejecuto el comando sin usar ningun agumento
                    y por eso mostro la salida anterior.</p>

                <div className="center">
                    <h1 className="title-subject">Argumentos</h1>
                </div>

                <p className="content-curso">Los argumentos se usan para que el comando sepa sobre que archivo trabajara
                    y en general se puede especificar diferentes elementos como argumento, en el ejemplo anterior se
                    le puede enviar como argumento el nombre de un directorio el comando mostrara los elementos de
                    ese directorio a continuacion se muestra un ejemplo</p>

                <div className="cli">
                    <div className="title-cli">
                        <center>
                            <p className="Content">Terminal</p>
                        </center>
                    </div>
                    <div className="body-cli">
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls Documentos</span></p>
                        <p className="Content">Notas.txt Tarea.txt Hola.txt Guion.txt DotFile.txt</p>
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                    </div>
                </div>

                <p className="content-curso">En el ejemplo anterior el comando mostro los elementos de la carpeta documentos
                    y aunque el comando se puede usar en archivos de texto resulta poco practico ya que solo muestra
                    el mismo archivo de texto por lo que es mejor usar como parametro un fichero para mostrar el contenido
                    del mismo</p>

                <div className="center">
                    <h1 className="title-subject">Opciones</h1>
                </div>

                <p className="content-curso">Las opciones de un comando pueden modificar la informacion que muestra o tambien
                    se puede decir que cambian la salida del comando, en los ejemplos anteriores se usaba el comando ls no
                    llevaba una opcion pero el comando puede llevar opciones como se puede observar en el siguiente ejemplo
                </p>

                <div className="cli">
                    <div className="title-cli">
                        <center>
                            <p className="Content">Terminal</p>
                        </center>
                    </div>
                    <div className="body-cli">
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls -l</span></p>
                        <p className="Content">Total 48</p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 may 14 22:40 <span className="directorio">Descargas</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Documentos</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Escritorio</span></p>
                        <p className="Content">drwxr-xr-x 4 steve steve 4096 abr 22 22:05 <span className="directorio">Imágenes</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Música</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <spa className="directorio">Plantillas</spa></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Público</span></p>
                        <p className="Content">drwx------ 6 steve steve 4096 abr 22 22:52 <span className="directorio">snap</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <pan className="directorio">Vídeos</pan></p>
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                    </div>
                </div>

                <p className="content-curso">En el ejemplo anterior al comando ls se le agrego la opcion de -l lo cual cambio
                    la salida del comando y muestra mas opciones ya que este es el formato de salida largo con lo cual se
                    obtiene mas informacion ademas del simple listado de los elementos de un directorio, otra opcion que se puede
                    usar es la siguiente.</p>

                <div className="cli">
                    <div className="title-cli">
                        <center>
                            <p className="Content">Terminal</p>
                        </center>
                    </div>
                    <div className="body-cli">
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls -r</span></p>
                        <p className="Content"><span className="directorio">Publico Musica Escritorio Documentos Descargas</span></p>
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                    </div>
                </div>

                <p className="content-curso">En este caso la opcion r hace que el orden del listado este invertido y como se puede
                    estar pensado las opciones se pueden usar combianadas o ejecutar al mismo tiempo para combinar los efectos de ambas
                    opciones como se puede ver a continuacion</p>

                <div className="cli">
                    <div className="title-cli">
                        <center>
                            <p className="Content">Terminal</p>
                        </center>
                    </div>
                    <div className="body-cli">
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls -l -r</span></p>
                        <p className="Content">Total 48</p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <pan className="directorio">Vídeos</pan></p>
                        <p className="Content">drwx------ 6 steve steve 4096 abr 22 22:52 <span className="directorio">snap</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Público</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <spa className="directorio">Plantillas</spa></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Música</span></p>
                        <p className="Content">drwxr-xr-x 4 steve steve 4096 abr 22 22:05 <span className="directorio">Imágenes</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Escritorio</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 abr 22 21:47 <span className="directorio">Documentos</span></p>
                        <p className="Content">drwxr-xr-x 2 steve steve 4096 may 14 22:40 <span className="directorio">Descargas</span></p>
                        <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                    </div>
                </div>

                <p className="content-curso">Se debe observar que las opciones por lo general siguen la sintaxis  que se muestra a continuacion</p>

                <div className="center">
                    <div className="div-code">
                        <p className="code-simple">comando -[opciones] [argumentos]</p>
                    </div>
                </div>

                <p className="content-curso">Siempre debe ir el caracter - antes de la opcion que se usara ya que esto es el indicador del
                    uso de una opcion y no de un parametro, en el caso de que se use mas de una opcion se puede poner el caracter - antes
                    de cada una de las opciones o antes de la primer opcion y depues las otras opciones como en los siuientes ejemplos
                </p>

                <div className="center">
                    <div className="div-code">
                        <p className="code-simple">ls -l -r</p>
                        <p className="code-simple">ls -lr</p>
                        <p className="code-simple">ls -rl</p>
                    </div>
                </div>

                <p className="content-curso">En el ejemplo anterior tanto -l -r y -lr son combinaciones validas de las opciones y queda
                    a dexcision del usuario usar una u otra forma y tambien hay que observar que el comando -rl tambien mostrara la
                    misma salida pero puede que en otros casos el orden si pueda afectar la salida del comando, otro aspecto importante
                    es que las opciones tambien suelen seguir reglas nemotecnicas para hacer que sea facil recordad para que se usa en
                    los caso anteriores -l corresponde a "long" y -r a "reverse" con lo cual se hace facil recordad como se ve modificada
                    la salida del comando.</p>
            </DivRead>
        </DivCurso>
    );
}

export default Sintaxis;