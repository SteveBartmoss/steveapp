import React from "react";

function Archivos(){
    return(
        <div className="div-curso">
            <h1 className="title1">Archivos</h1>

            <hr className="line"/>

            <p className="content-curso">Los archivos son un elemento importante 
            en la mayoria de sistemas operativos ya que estos pueden tener programas, 
            informacion, o cumplen una funcion en el sistema operativo (en realidad 
            todo el sistema operativo esta completamente compuesto por archivos) 
            por esta razon es importante conocer el manejo de los mismos.</p>

            <h1 className="title1">Listar archivos</h1>

            <p className="content-curso">Uno de los primeros paso es saber como 
            listar los archivos o el contenido de un directorio, el comando es 
            bastante sencillo y ya se ha visto en temas anteriores y es el ls 
            a continuacion se muestra su sintaxis.</p>

            <div className="center">
                <div className="div-code">
                    <p className="code-simple">ls -[opciones] [archivo]</p>
                </div>
            </div>

            <p className="content-curso">El comando anterior se puede usar con la 
            opcion -l para optener un resultado mas detallado de los archivos como 
            se puede ver en el siguiente ejemplo.</p>

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

            <p className="content-curso">El resultado anterior muestra las lista extentendida
             de los archivos donde podemos ver el tipo de archivo, los permisos del archivo, 
             el propietario, el grupo propietario, tamaño del archivo, marca de tiempo, 
             nombre del archivo. Esta informacion puede ser muy util a la hora de trabajar 
             con archivos a continuacion se muestra mas sobre los apartados del resultado.</p>

             <h1 className="title1">Tipo de archivo</h1>

             <p className="content-curso">El primer elemento que se muestra en la salida del 
             comando es el tipo del archivo que se esta listando en el ejemplo que se muestra 
             todos los archivos son del tipo directorio pero esto cambia segun el contenido 
             del direcctorio en que se ejecuta el comando.</p>

             <div className="div-code">
                <p className="code-simple"><span className="key-word">d</span>rwxr-xr-x 2 steve steve 4096 abr 22 21:47</p>
             </div>

             <p className="content-curso">Los diferentes de tipos de archivos que existen son 
             los siguientes: </p>

             <ul>
                <li className="file-item">- archivos regulares</li>
                <li className="file-item">b arhivos de bloque</li>
                <li className="file-item">c archivos de caracter</li>
                <li className="file-item">d archivos de directorios</li>
                <li className="file-item">l archivos de enlace simbolico</li>
                <li className="file-item">n archivos de red</li>
                <li className="file-item">p archivos de pipe</li>
                <li className="file-item">s archivos de socket</li>
             </ul>

             <h1 className="title1">Permisos del archivo</h1>

             <p className="content-curso">El segundo elemento representa los permisos del 
             archivo y esto nos permite modificar el archivo, solo abrir en modo lectura 
             o si es el caso de ejecutar el archivo.</p>

             <div className="div-code">
                <p className="code-simple">d<span className="key-word">rwxr-xr-x</span> 2 steve steve 4096 abr 22 21:47</p>
             </div>

             <h1 className="title1">Numero de enlaces directos</h1>

             <p className="content-curso">El tercer elemento representa el numero de enlaces 
             directos hacia el archivo que se listo, estos se pueden ver como apuntadores 
             hacia la ubicacion del archivo.</p>

             <div className="div-code">
                <p className="code-simple">drwxr-xr-x <span className="key-word">2</span> steve steve 4096 abr 22 21:47</p>
             </div>

             <h1 className="title1">Propietario del archivo</h1>

             <p className="content-curso">El cuarto elemento muestra quien es el propietario 
             y al crear un archivo el propietario por defecto es el usuario que lo creo 
             aunque esto puede ser cambiado</p>

             <div className="div-code">
                <p className="code-simple">drwxr-xr-x 2 <span className="key-word">steve</span> steve 4096 abr 22 21:47</p>
             </div>

             <h1 className="title1">Grupo propietario del archivo</h1>

             <p className="content-curso">El quinto elemento muestra el grupo al que 
             pertenece el propietario del archivo y este al igual que el propietario se 
             asigna por defecto el grupo del usuario que creo el documento</p>
             
             <div className="div-code">
                <p className="code-simple">drwxr-xr-x 2 steve <span className="key-word">steve</span> 4096 abr 22 21:47</p>
             </div>

             <h1 className="title1">Tamaño del archivo</h1>
             
             <p className="content-curso">El sexto elemento muestra el tamaño del archivo y 
             en este caso puede variar la forma en que se muestra ya que elementos muy grandes
             no se muestran en kilobytes porque seria un numero muy grande y en ese caso se 
             mutesra en otra unidad de medida</p>

        </div>
    );
}

export default Archivos;