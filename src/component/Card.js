import React from "react";
import '../App.css';

function Card({imgUrl,title,paragraph,urlVideo}){
    return(
        <div className="back-card">
        <div className="div-card">
            <img className="imgCard" src={imgUrl} alt="imagenVideo"/>
            <h3 className="titleCard">{title}</h3>
            <p>{paragraph}</p>
            <a className="linkVideo" href={urlVideo} target="_blank">Ir al video</a>
        </div>
        </div>
    );
}

export default Card;