import React from "react";

function MenuItems() {
    return (
        <>
            <div>
                <h1 className="title1">Secciones mas poppulares</h1>
                <div className="div-flex-articles">

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
                </div>
            </div>
        </>
    );
}
export default MenuItems; 