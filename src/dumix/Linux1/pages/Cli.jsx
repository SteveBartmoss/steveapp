import React from "react";

function Cli(){
    return(
        <div className="div-curso">

            <div className="center">
                <h1 className="title1">¿Que es CLI?</h1>
            </div>
            
        
            <p className="Content">La letras cli hacen referencia a Comand Line Interface que es una interfaz que
            recibe comandos y que seguramente la has utilizado alguna vez si tuviste que instalar algo del viejo y
            confiable steam verde, normalmente la terminal de comandos se trata de una ventana negra en la que solo
            aparece una linea de texto que comun mente se llamaba promp</p>

            <div className="bash">
                <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>~<span className="Content">$</span></p>
            </div>

            <p className="Content">Usar una terminal puede parecer dificil pero no es para tanto solo se trata de
            escribir intrucciones para la computadora lo cual era bastante comun con las primeras computadoras en
            las cuales no existia una interfaz de usuario y todo era dirigido por la linea de comandos, esto hacia
            que manejar una computadora fuera una tarea mas compleja para los usuarios que no estaban muy acostumbrados
            a programar pero cuando se volvio popular tener un computadora se busco la manera de facilitar su uso y por eso
            se crearon las interfaces de usuarios para hacer que mas personas pudieran usar una computadora.
            </p>

            <div className="center">
                <h1 className="title1">¿Porque usar un cli?</h1>
            </div>
            

            <p className="Content">Si bien el uso de una terminal dejo de ser popular y actualmente solo se usa para
            intalar programas avanzados o para revisar la ip de un equipo aprender a usarla puede ser de gran ayuda
            sobre todo en el ambito de redes y de servidores en el cual usar una terminal es muy comun, esto se debe 
            a que un sistema menajdo por comandos es muy ligero en cuestion de recursos logrando un mejor desempeño 
            a costa de tener un manejo mas complejo y menos llamativos para las personas pero aunque paresca lo contrario
            la termial tiene el mismo o mejor nivel de manejo del sistema operativo ya que muchas veces la interfaz de
            usuario ejecuta comandos de terminal en segundo plano sin que el usuario se de cuenta ya que muchas veces la
            unica manera de realizaer ciertas tares es mediante la llamda de cierta rutina y eso se logra mediante 
            un comando.
            </p>

            <p className="Content">Para empezar a usar una terminal es tan cencillo como usar el comando cntrl+alt+t 
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
                    <p className="promp">steve@steve-HP-Notebook <span className="Content">:</span>~<span className="Content">$</span></p>
                </div>
            </div>

            <p className="Content"> si logra ver una pantalla similar a la representacion que se muestra en la parte superior
            entonces logro abrir con exito nuna nueva terminal
            </p>

            <h1 className="title1">El promp de la terminal</h1>

            <p className="Content">Al abrir la terminal notaras que hay unas palabras escritas bueno eso
            es lo que normalmente llamamos promp</p>
        </div>
        
        
    );
}

export default Cli;