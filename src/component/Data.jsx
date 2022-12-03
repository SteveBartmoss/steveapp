import React from "react";
import "../App.css";

function Data({imge, title, paragrap, url}){
    return(
        <div className="InfoSteve">
            <img className="imgSteve" src={imge} />
            <div>
                <h1 className="title1 Content">{title}</h1>
                <p className="Content">{paragrap}</p>
                <a className="linkVideo" href={url}>Ir al enlace</a>
            </div>
            
        </div>
    );
}

export default Data;