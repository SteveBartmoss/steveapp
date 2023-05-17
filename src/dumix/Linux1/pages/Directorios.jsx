import React from "react";

function Directorio(){
    return(
        <di className="div-curso">
            <h1 className="title1">Directorios</h1>

            <p className="Content">Los directiorios en linux son como las carpetas
            en widows solo que se cambia la forma en la que se llaman pero a niveles
            practicos cumplen con la misma funcion y no tienen diferencia en su uso 
            convencional</p>

            <h1 className="title1">Estructura de los direcctorio de linux</h1>

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

            <h1 className="title1">Directorio raiz (/)</h1>

        </di>
        
    );
}

export default Directorio;