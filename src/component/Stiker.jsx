import React from "react";
import "../App.css"

function Stiker({imge, title, paragrap}){
    return(
        <div className="InfoSteve">
            <img className="imgSteve" src={imge} />
            <div>
                <h1 className="title1 Content">{title}</h1>
                <p className="Content">{paragrap}</p>
            </div>
        </div>
    );
}

export default Stiker;