import React from "react";

function Cli(){
    return(
        <div className="div-curso">

            <div className="center">
                <h1 className="title1">¿Que es CLI?</h1>
            </div>
            
        
            <p className="content-curso">La letras cli hacen referencia a Comand Line Interface que es una interfaz que
            recibe comandos y que seguramente la has utilizado alguna vez si tuviste que instalar algo del viejo y
            confiable steam verde, normalmente la terminal de comandos se trata de una ventana negra en la que solo
            aparece una linea de texto que comun mente se llamaba promp</p>

            <div className="bash">
                <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
            </div>

            <p className="content-curso">Usar una terminal puede parecer dificil pero no es para tanto solo se trata de
            escribir intrucciones para la computadora lo cual era bastante comun con las primeras computadoras en
            las cuales no existia una interfaz de usuario y todo era dirigido por la linea de comandos, esto hacia
            que manejar una computadora fuera una tarea mas compleja para los usuarios que no estaban muy acostumbrados
            a programar pero cuando se volvio popular tener un computadora se busco la manera de facilitar su uso y por eso
            se crearon las interfaces de usuarios para hacer que mas personas pudieran usar una computadora.
            </p>

            <div className="center">
                <h1 className="title1">¿Porque usar un cli?</h1>
            </div>
            

            <p className="content-curso">Si bien el uso de una terminal dejo de ser popular y actualmente solo se usa para
            intalar programas avanzados o para revisar la ip de un equipo aprender a usarla puede ser de gran ayuda
            sobre todo en el ambito de redes y de servidores en el cual usar una terminal es muy comun, esto se debe 
            a que un sistema menajdo por comandos es muy ligero en cuestion de recursos logrando un mejor desempeño 
            a costa de tener un manejo mas complejo y menos llamativos para las personas pero aunque paresca lo contrario
            la termial tiene el mismo o mejor nivel de manejo del sistema operativo ya que muchas veces la interfaz de
            usuario ejecuta comandos de terminal en segundo plano sin que el usuario se de cuenta ya que muchas veces la
            unica manera de realizaer ciertas tares es mediante la llamda de cierta rutina y eso se logra mediante 
            un comando.
            </p>

            <p className="content-curso">Para empezar a usar una terminal es tan cencillo como usar el comando cntrl+alt+t 
            si estas en un sistema de linux y esto abria una nueva terminal de comandos ya sea usando bash o con zsh 
            que es la terminal que se suale utilizar un sistema unix o mac, en caso de que el comando no funcion en la
            distribucion que tiene instalada basta con buscar en entre las aplicaciones la que diga terminal en el caso
            del sistema operativo windows podemos buscar usando el menu la aplicacion de cmd o tambien la aplicacion de
            power shell difernecia antre ambas queda como tarea de los usarios de windows.
            </p>

            <div className="cli">
                <div className="title-cli">
                    <center>
                        <p className="Content">Terminal</p>
                    </center>
                </div>
                <div className="body-cli">
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span><span className="directorio">~</span><span className="Content">$</span></p>
                </div>
            </div>

            <p className="content-curso"> si logra ver una pantalla similar a la representacion que se muestra en la parte superior
            entonces logro abrir con exito nuna nueva terminal
            </p>

            <h1 className="title1">El promp de la terminal</h1>

            <p className="content-curso">Al abrir la terminal notaras que hay unas palabras escritas bueno eso
            es lo que normalmente llamamos promp que es los que marca la posicion del cursor en la pantalla 
            y aporta informacion como el mobre del usuario y el hots, el directorion el que no es encontramos
            y alguna otra informacion que puede variar.</p>

            <p className="content-curso">Por lo general la estructura de un propmp sige estos parametros </p>

            <div className="center">
                <div className="div-code">
                    <p className="code-simple">[usuario] @ [host] : [directorio] $</p>
                </div>
            </div>

           <p className="content-curso">El usuario hace referencia a la sesion que se inicio, el host es el
           nombre que el sistema le asigno al equipo, el direcotrio es la informacion que puede
           resultar mas util y en el ejemplo el elemento que indica el directorio actual es ~ que hace
           referencia a la direccion /home/steve que es la direccion de la carpeta personas del usuario. 
           La informacion que muestra la promp se puede modificar por lo que los elementos pueden variar
           segun la configuracion del usuario pero en sistemas instalados por defecto si se sigue el
           ejemplo o algun otro con variaciones lijeras</p> 
            
        </div>
        
        
    );
}

export default Cli;