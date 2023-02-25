import React from "react";
import Stiker from "../component/Stiker";
import ban from "../img/baner\ canal.png";

function Almanac(){
    return(
        <div className="Contenedor">
            <h1 className="title1">Logros desbloqueados</h1>
            <Stiker imge={ban} title="22/11/22 Tenemos publicaciones"
                paragrap="Por fin youtube decide que si tengo el publico suficiente como para poder crear publicaciones,
                un poco decepcionante que youtube soloactuive ciertas caracteristicas dependiendo de tu progreso pero bueno 
                la vida no siempre es como queremos XD"
            />
            <Stiker imge={ban} title="07/04/21 Primer video viral" 
                paragrap="Primer video en superar las 10 vistas (las cuales principalmente venian de amigos y familiares)
                nunca pense que el video sobre pacman lo llegaria a 14k en reproducciones, a veces las cosas no salen como 
                uno espera XD"
            />
            <Stiker imge={ban} title="16/01/21 Inicia el viaje"
                paragrap="Inicia el camino de steve abriendo su canal y subiendo videos como una maquina
                para tener contenido que mostrar a los usuarios y poder empezar a generar un publico, todas las probabilidades
                en contra pero el 100% de fe en que un canal que comparte conocimiento pueda llegar lejos :)"
            />
        </div>
    );
}

export default Almanac;