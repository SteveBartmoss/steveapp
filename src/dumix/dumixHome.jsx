import React from "react";
import Baner from "../component/Baner";
import DumixAbout from "./pages/dumixAbout";

function DumixHome(){
    return(
        <>
            <Baner/>
            <div>
                <h1 className="title1">Contenido principal</h1>
                <div>
                    <h1 className="title1">Primeros pasos</h1>
                    <p className="Content">En esta seccion se abordaran temas para personas
                    que no han interactuado con linux, se describira lo que es una terminal
                    de comandos, cuales son las partes que componen la terminal, comandos basicos
                    para crear un archovo, como ver los permisos, como listar los elementos de un 
                    directorio, como navegae entre direcctorios. Esta parte busca dar una introduccion
                    a los usuarios que nunca han utilizado comandos</p>
                    <a href="dumix/linux1">Ir al curso</a>
                </div>

                <div>
                    <h1 className="title1">Pimp my terminal</h1>
                    <p className="Content">Un poco de estilo a nadie le queda mal y si vas pasar gran
                    parte de tu tiempo interactuando con la terminal de comando es buena idea que puedas
                    personalizarla y asi por lo menos tener un area de trabajo mas agradable, este post 
                    te dara algunsejos para tener un cli mas a la moda y digna de un hackerma asi podras
                    impresionar a las nenas cuando les muestras todo el tiempo que ahorras por usar vim</p>
                    <a href="dumix/pimp">Ir al post</a>
                </div>
                
            </div>
            <DumixAbout />
        </>
    );
}

export default DumixHome;