import React from "react";
import '../App.css';

function Card({imgUrl,title,paragraph,urlVideo}){
    return(
        <div className="div-card">
            <img className="imgCard" src={imgUrl}/>
            <h3 className="titleCard">{title}</h3>
            <p>{paragraph}</p>
            <a className="linkVideo" href={urlVideo}>Ir al video</a>
        </div>
    );
}

export default Card;