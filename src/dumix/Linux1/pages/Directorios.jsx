import React from "react";

function Directorio(){
    return(
        <di className="div-curso">
            <h1 className="title1">Directorios</h1>

            <p className="Content">Los directiorios en linux son como las carpetas
            en widows solo que se cambia la forma en la que se llaman pero a niveles
            practicos cumplen con la misma funcion y no tienen diferencia en su uso 
            convencional</p>

            <h1 className="title1">Estructura de los direcctorios de linux</h1>

            <p className="Content">La configuracion de los directorios en linux puede
            parecer compleja pero con si se analiza se descubrira que tiene una mejor
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
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>/<span className="Content">$ ls</span></p>
                    <p className="Content"><span className="directorio">bin boot dev etc home lib media opt proc root sbin 
                    srv sys tmp usr var</span></p>
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>/<span className="Content">$</span></p>
                </div>
            </div>

            <p className="Content">Puede que estes pensado que la salida del comando no 
            corresponde al tipica salida del comando ls pero esto es porque el comando 
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

            <h1 className="title1">Tipos de directorios</h1>

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

            <h1 className="title1">Directorio raiz (/)</h1>

            <p className="Content">Este directorio generalmente se representa con el simbolo / 
            se le llama raiz y es debido a que los demas directorios estan dentro del directorio 
            raiz de ahi que se llame de esta manera ya que se piensa como el contenedor de todo 
            el sistema</p>

            <h1 className="title1">Directorio bin</h1>

            <p className="Content">Este directorio contiene archivos binarios para que los usuarios
            puedan usar el equipo y para que el sistema puede trabajar correctamente, la mayoria de 
            los comandos que se ejecutan desde la terminal se encuentran en este directorio y de ahi
            la importancia de esta carpeta y sus archivos</p>

            <h1 className="title1">Directorio boot</h1>

            <p className="Content"></p>
        </di>
        
    );
}

export default Directorio;