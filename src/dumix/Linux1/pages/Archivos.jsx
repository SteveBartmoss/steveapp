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

        </div>
    );
}

export default Archivos;