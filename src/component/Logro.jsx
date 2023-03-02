import React from "react";
import "../App.css";

function Logro({imge, title, paragrap}){
    return(
        <div className="grid-logro">
            <img className="imgLogro" src={imge} />
            <div>
                <h1 className="title1 Content">{title}</h1>
                <p className="Content">{paragrap}</p>
            </div>
        </div>
    );
}

export default Logro;