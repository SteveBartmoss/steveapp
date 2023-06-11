import React from "react";

function GifItems({title,url}){
    return(
        <div>
            <img src={url} alt={title} />
            <p className="Content">{title}</p>
        </div>
    );
}

export default GifItems;