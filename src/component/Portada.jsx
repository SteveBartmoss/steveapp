import React from "react";
import { DivColum, DivRow } from "./Contenedores/Cajas";

function Portada({image}){
    return(
        <section className="portada">
            <DivRow>
                <div className="frame-img">
                    <img className="img-portada"  src={image}/>            
                </div>
                <DivColum>
                    <h1 className="title1">Steve</h1>
                    <p className="text-portada">Estudiante, programador, amante de los videjuegos</p>
                </DivColum>
            </DivRow>
        </section>
    );
}

export default Portada;
