import React from "react";

function MenuItems() {
    return (
        <>
            <div className="div-menu-item">
                <div className="div-flex-item">

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Videos con mas vistas</h1>
                        </div>
                        <p className="Content">En esta seccion puedes ver una lista de mis
                            videos con mas visitas y un paquena descripcion del mismo que tal
                            vez te llame la atencion y decidas verlo</p>
                        <div className="center">
                            <a className="dumix-btn">Saber mas</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Videos con pocas vistas</h1>
                        </div>
                        <p className="Content">En esta seccion puedes ver una lista con videos que
                            no tienen tantas vistas pero pienso que si deberian tener mas vistas, puedes
                            darles un oportunidad quiza te agradan</p>
                        <div className="center">
                            <a className="dumix-btn">Saber mas</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Rows and Colums</h1>
                        </div>
                        <p className="Content">En esta seccion encontraras mis videos sobre reflexiones
                            o es contenido mas tranquilo para poder tener un descanso de videos informativos
                            pero que seguramente te podra interesar</p>
                        <div className="center">
                            <a className="dumix-btn">Saber mas</a>
                        </div>
                    </div>

                    <div className="div-min-article">
                        <div className="center">
                            <h1 className="title1">Articulos</h1>
                        </div>
                        <p className="Content">En este apartado se encuentran los articulos de
                            la pagina que son referentes a los videos de la misma pero con un poco
                            mas de informacion que te puede agradar</p>
                        <div className="center">
                            <a className="dumix-btn">Saber mas</a>
                        </div>
                    </div>
                </div>
                <div className="div-article">
                    <h1 className="title1">El cyber punk esta delante de nosotros</h1>
                    <p className="content-columna">La mayoria de personas se siente atraida por la idea de vivir en una epoca ambientada en
                        la tematica futurista y distopica de una sociedad cyberpunk ya que para ser honestos a quien
                        no le gusta la idea de que tengamos autos voladores, implamentes tecnologicos y a una red de
                        tecnologia que nos permite estar conectados con la mayoria. Pero esto no esta lejos de nuestra
                        actualidad y de hecho la gran mayoria de personas esta viviendo en una epoca de tecnologia al
                        nivel de una historia cyberpunk aunque no lo paresca hay una gran muestra de esto en muchos lados
                        como podemos ver a continuacion.
                    </p>
                    <div className="center">
                        <a className="dumix-btn">Seguir leyendo</a>
                    </div>
                    
                </div>
            </div>
        </>
    );
}
export default MenuItems; 