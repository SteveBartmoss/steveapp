import React from "react";

function TagVideo({url}){
    return(
        <div className="back-articles">
            <p className="content-curso">Si lo prefieres pueder ver el contenido en youtube aqui:</p>
            <a className="dumix-btn" href={url}>Ver video</a>
        </div>
    );
}

export default TagVideo;