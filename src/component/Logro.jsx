import React from "react";
import "../App.css";
import { DivLogro } from "./Contenedores/Cajas";

function Logro({imge, title, paragrap}){
    return(
        <DivLogro>
            <img className="imgLogro" src={imge} />
            <div className="div-text">
                <h1 className="title1 Content">{title}</h1>
                <p className="Content">{paragrap}</p>
            </div>
        </DivLogro>
    );
}

export default Logro;