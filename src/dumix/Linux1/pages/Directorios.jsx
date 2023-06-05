import React from "react";

function Directorio(){
    return(
        <div className="div-curso">

           <div className="center">
                <h1 className="title-subject">Directorios</h1>
           </div> 

            <p className="Content">Los directiorios en linux son como las carpetas
            en widows solo que se cambia la forma en la que se llaman pero a niveles
            practicos cumplen con la misma funcion y no tienen diferencia en su uso 
            convencional</p>

            <div className="center">
                <h1 className="title-subject">Estructura de los direcctorios de linux</h1>
            </div>

            <p className="Content">La configuracion de los directorios en linux puede
            parecer compleja pero si se analiza se descubrira que tiene una mejor
            organizacion que la de windows solo que las diferencias pueden llegar a
            ser muchas, a continuacion se muestra la salida estandar de la organizacion
            </p>

            <div className="cli">
                <div className="title-cli">
                    <center>
                        <p className="Content">Terminal</p>
                    </center>
                </div>
                <div className="body-cli">
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ ls</span></p>
                    <p className="Content"><span className="directorio">bin boot dev etc home lib media opt proc root sbin 
                    srv sys tmp usr var</span></p>
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                </div>
            </div>

            <p className="Content">Puede que estes pensado que la salida del comando anterior 
            no corresponde al tipica salida de ls pero esto es porque el comando 
            se ejecuto en el direcctorio root o / y por eso muestra un resultado que el
            que se obtiene al usar el comando en el directorio home del usuario</p>

            <p className="Content">Si se quiere ver el mismo resultado basta con ejecutar
            los siguientes comandos en el immso orden</p>

            <div className="center">
                <div className="div-code">
                    <p className="code-simple">cd /</p>
                    <p className="code-simple">ls</p>
                </div>
            </div>

            <h1 className="title-subject">Tipos de directorios</h1>

            <p className="Content">Si bien la mayoria de los directorios se tratan de
            carpetas no todas cumplen con la misma funcion o tiene los mismo permisos
            con lo cual se pueden tener ciertos tipos de directorios como se puede
            ver a continuacion</p>

            <h1 className="title1">Directorios compartidos</h1>

            <p className="Content">Estos direcctorios pueden ser accedidos desde otros
            equipos con lo cual contienen archivos que pueden ser usador por otra maquina
            </p>

            <h1 className="title1">Directorios no compartidos</h1>

            <p className="Content">Este tipo de directorio no puede ser compartido y su
            acceso se suele limitar al adiministrador del sistema impidiendo tambien la
            modificacion del contenido si no es adiministrador</p>

            <h1 className="title1">Directorios no variables</h1>

            <p className="Content">Este tipo de directorio suele varias su contenido sin
            intervencion de adiministrador o incluso del usuarios ya que su contenido se 
            modifica por el sistema</p>

            <h1 className="title1">Directorios estaticos</h1>

            <p className="Content">Estos tipo de directorio no varia su contenido y 
            los cambios pueden estar limitados por el adiministrador o el usuario</p>

            <h1 className="title1">Directorio <span className="key-word">/</span> (raiz)</h1>

            <p className="Content">Este directorio generalmente se representa con el simbolo / 
            se le llama raiz y es debido a que los demas directorios estan dentro del directorio 
            raiz de ahi que se llame de esta manera ya que se piensa como el contenedor de todo 
            el sistema</p>

            <h1 className="title1">Directorio <span className="key-word">bin</span></h1>

            <p className="Content">Este directorio contiene archivos binarios para que los usuarios
            puedan usar el equipo y para que el sistema puede trabajar correctamente, la mayoria de 
            los comandos que se ejecutan desde la terminal se encuentran en este directorio y de ahi
            la importancia de esta carpeta y sus archivos</p>

            <h1 className="title1">Directorio <span className="key-word">boot</span></h1>

            <p className="Content">Este directorio contiene los archivos necesarios para que el
            sistema pueda arrancar entre los cuales se puede encontrar el kernel y un gestor de arranque
            como puede ser grub, el contenido de este directorio no suele modificarse a no ser que el 
            adiministrador realice una configuracion y algunas veces se crea una particion diferente para
            este direcotorio
            </p>

            <h1 className="title1">Directorio <span className="key-word">dev</span></h1>

            <p className="Content">Aqui es donde normalmente se encuentran los dispositivos que 
            se conectan en el equipo ya que linux trata los dispositivos como archivos y la manera
            en la que accede a estos dispositivos es leyendo y escribiendo en el archivo destinado
            al dispositivo que conectamos, de esta forma en este directorio veriamos un archivo para
            una memoria usb que se conecte, para un mouse, un teclado o incluso una lectora de discos.
            </p>

            <h1 className="title1">Directorio <span className="key-word">etc</span></h1>

            <p className="Content">Esta carpeta tiene los archivos de configuracion de sistema ya que 
            muchas aplicaciones se controlan desde aqui pero aun asi estos archivos pueden ser sustituidos
            por los archivos del usuario que se encuentran dentro de la carpeta home del usuario.
            Algunas de las aplicaciones que contienen archivos en esta carpeta son apt, xwindow o 
            aplicaciones externas como google chrome.
            </p>

            <h1 className="title1">Directorio <span className="key-word">home</span></h1>

            <p className="Content">Aqui es donde se encuentras los archivos de todos los usuarios
            menos del usuario root (ya que este ultimo tiene su propio directorio) los archivos de 
            esta carpeta pueden ser compartidos con otros usuarios, algunos de los archivos que se
            almacenan aqui son fotos, videos, musica, documentos entre otros. Cada usuario tiene su 
            propia carpeta que generalmente tiene el mismo nombre que el usuario al que pertenece, 
            dentro de la carpeta personal de un usuario se pueden encontrar archivos de cofiguracion
            segun lo deseen los usuarios.
            </p>

            <h1 className="title1">Directorio <span className="key-word">lib</span></h1>

            <p className="Content">Dentro de esta carpeta se encuentran librerias necesarias para que 
            los archivos binarios anteriormente mencionados puedan funcionar, estas librerias pueden ser 
            usados por multiples usuarios y su contenido no es variable ya que solo el administrador 
            realiza cambios en los elementos de esta carpeta.</p>

            <h1 className="title1">Directorio <span className="key-word">mnt</span></h1>

            <p className="Content">Esta carpeta esta destinada para tener los puntos de montaje de los 
            dispositivos de almacenamiento, los discos externos se encuentran aqui y el su contnido puede
            variar y diferentes usuarios pueden acceder a estos archivos.</p>

           <h1 className="title1">Directorio <span className="key-word">media</span></h1> 

           <p className="Content">Al igual que el directorio anterior esta destinado a contener los 
           puntos de montaje de los dispositivos extraibles como una memoria usb y lectores de discos, aunque
           se hace la diferencia entre los dos directorios en este directorio se puede montar los dicos que 
           se montan en el directorio mnt se pueden montar aqui tambien.</p>

           <h1 className="title1">Directorio <span className="key-word">opt</span></h1>

           <p className="Content">Dentro de esta carpeta podemos encontrar los archivos de los 
           programas que son externas al sistema operativo como puede ser google chrome o discord
           al igual que otras carpetas los archivos que estan aqui pueden ser usados por otros usuarios
           que estan presentes en el equipo, esta carpeta es similar a usr/local pero se creo porque 
           estos programas no cumplen con el estandar requerido para que sean almacenados en la carpet 
           usr.</p>

           <h1 className="title1">Directorio <span className="key-word">proc</span></h1>

           <p className="Content">Los archivos que estan aqui son archivos virtuales que muestran 
           informacion sobre procesos que se estan ejecutando en el equipo tambien proporcionan 
           informacion sobre aplicaciones que estan siendo ejecutadas y por esto se tiene una 
           carpeta por cada aplaicacion y proceso que esta siendo ejecutado, estos archivos no estan
           siendo almacenados en el disco duro si no que se encuentran en la memoria ram del equipo 
           por esta razon el contendio de la carpeta se elimina siempre que se apaga la computadora.
           </p>

           <h1 className="title1">Directorio <span className="key-word">root</span></h1>

           <p className="Content">El contenido de este directorio no esta compartido para otros 
           usuarios y tampoco se ve modificado a no ser que el administrador del sistema lo haga 
           ya que esta carpeta representa la misma carpet de home pero en este caso esta destinado 
           para el administrador del sistema o el usuario root.</p>

           <h1 className="title1">Directorio <span className="key-word">sbin</span></h1>

           <p className="Content">Este directorio tiene la misma funcion que eñl directorio bin ay 
           que tambien tiene archivos binarios que se pueden ejecutar pero en este caso solo pueden 
           ser llamados desde la cuenta de super usuario o del usuario root y de ahi viene la s del 
           directorio</p>

           <h1 className="title1">Direcotrio <span className="key-word">srv</span></h1>

           <p className="Content">Dentro de este directorio estan los archivos que pertenecen a 
           servidores que se pueden tener instalados el el equipo como por ejemplo el servidor apache
           o algun servidor ftp </p>

           <h1 className="title1">Directorio <span className="key-word">tmp</span></h1>
           
           <p className="Content">Aqui es donde pogramas almacenan variables que son requeridas para 
           funcionar o archivos que se requieren al momento de ejecucion pero no es necesarios que se 
           al macene todo el tiempo y por esta razon el sistema operativo borra el contenido de este 
           directorio cuando se apaga el equipo</p>

           <h1 className="title1">Directorio <span className="key-word">usr</span></h1>

           <p className="Content">Este directorio contiene todos los programas instalados por lo 
           que dentro estaran los archivos necesarios para que los programas puedan ser ejecutados de 
           manera correcta, el contenido de este directorio puede ser compartido con otros usuarios
           </p>

           <h1 className="title1">Directorio <span className="key-word">var</span></h1>

           <p className="Content">Este direcotorio almacena variables y archivos temporales como pueden 
           ser los logs del sistema, los registros de algunos programas o informacion que sea necesaria 
           durante el tiempo de ejecucion de algun programa
           </p>

           <h1 className="title1">Direcotrio <span className="key-word">sys</span></h1>

           <p className="Content">Dentro de este direcotorio podemos encontrar archivos referentes al 
           kernel, a las particiones del sistema, drivers y otros elementos relacionados con el 
           funcionamiento del sistema operativo
           </p>

           <p className="Content">Como se puede ver la estructura de linux puede parecer complicada 
           pero en la practica todo esta mejor ordenado que en los sistemas de linux y ademas es mas 
           claro ya que la mayoria de carpetas siguen reglas de mnemotecnia que permiten asociar facilmente 
           el contenido de la carpeta como por ejemplo el directorio srv que hace referencia a server, el 
           directorio usr que hace referencia user de esta manera los nombres hacen referencia a que funcion 
           cumple</p>

           <h1 className="title1">Imprimir el direcotorio de trabajo</h1>

           <p className="Content">Conocer el directorio en el que uno se encuentra puede ser de utilidad 
           y aunque el promp puede indicar el directorio, tambien es posible que no lo haga ya que se 
           modifico por lo cual podemos usar el comando pwd que muestra el direcotorio en el que se esta 
           en la sesion actual</p>

           <p className="Content">El resultado de emitir el comando pwd al abrir una nueva terminal deberia 
           ser similar al siguiente ejemplo</p>

           <div className="cli">
                <div className="title-cli">
                    <center>
                        <p className="Content">Terminal</p>
                    </center>
                </div>
                <div className="body-cli">
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$ pwd</span></p>
                    <p className="Content">/home/steve</p>
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                </div>
            </div>



        </div>
        
    );
}

export default Directorio;