import React from "react";
import Books from "../component/Books";
import Movies from "../component/Movies";
import Stiker from "../component/Stiker";
import steve from "../img/miniatura.jpg";
import "../App.css";


function Steve(){
    return(
        <div className="Contenedor">

            <Stiker imge={steve} title="Steve"
                paragrap="Estudiante de ingenieria en sistemas al cual le gustan los temas del a cultura geek, peliculas de ciencia ficcion, videojuegos
                y temas de programacion, crear contenido para el canal me divierte y ademas me ayuda un poco a investigar sobre temas de mi carrera y ademas comparto
                algunos temas con otras personas haciendo que mas personas se puedan interesar por la informatica.
                Una de sus metas es poder fundar una academia en linea para que las personas puedan acceder a los conocimientos
                de manera facil y rapida. Por esta razon inicia su camino en youtube para empezar a compartir informacion con las
                personas pero espera en algun momento poder migrarse a su propia plataforma Steve labs. "
            />
            
            <h1 className="title1">Peliculasfavoritas</h1>
            <Movies />
            <h1 className="title1">Libros favoritos</h1>
            <Books />

        </div>
        
    );
}

export default Steve;
