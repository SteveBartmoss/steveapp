import React from "react";
import "../App.css";

function Topic({imgUrl,title,paragraph}){
    return(
        <div>
            <img className="imgCard" src={imgUrl}/>
            <h3 className="titleCard">{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export default Topic;