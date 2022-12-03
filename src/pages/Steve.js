import React from "react";
import Stiker from "../component/Stiker";
import Data from "../component/Data";
import steve from "../img/steveA.png";
import game from "../img/game.png";
import music from "../img/music.png";
import arcade from "../img/arcade.png";
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
            
            <Stiker imge={game} title="Jugos favoritos"
                paragrap="Los video juegos estan presentes en una gran parte de mi vida y estos son algunos titulos que me gustan:
                Halo reach, Cyberpunk, Age of empires, Minecraft, Left 4 dead, COD blacp ops zombies, The legen of zelda ocarina of time"
            />

            <Data imge={music} title="Mi perfil de spotify"
                paragrap="Si quieres saber que tipode musica escuho o dar una vuelta mis playlist de spotify tienes un enlace a mi perfil
                para que puedas seguirme, quizas algunas de mis playlist te agraden"
                url="https://open.spotify.com/user/31oqe6wxs3fjglyrintoskfe342u?si=33e8b9d8974346b4"
            />

            <Data imge={arcade} title="Mi perifl de steam"
                paragrap="Si quires agregarme en steam para jugar o para ver mi biblioteca de juegos o las resenas de titulos que he jugado
                puedes seguirme con el enlace a mi perfil que aparece a continuacion"
                url="https://steamcommunity.com/id/tonyhallan/"
            />

        </div>
        
    );
}

export default Steve;
