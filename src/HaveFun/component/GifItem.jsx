import React from "react";

function GifItems({title,url}){
    return(
        <div className="gif-card">
            <img className="gif" src={url} alt={title} />
            <p className="Content">{title}</p>
        </div>
    );
}

export default GifItems;