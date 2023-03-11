import React from "react";

function Portada({image}){
    return(
        <section className="portada">
            <div className="frame-img">
                <img className="img-portada"  src={image}/>
                <h1 className="title1">Steve</h1>
                <p className="text-portada">Estudiante, programador, amante de los videjuegos</p>
            </div>
        </section>
    );
}

export default Portada;
