import React from "react";
import { DivCenter } from "./Contenedores/Cajas";

function TagVideo({ url }) {
    return (
        <div className="back-articles">
            <p className="content-curso">Si lo prefieres pueder ver el contenido en youtube aqui:</p>
            <DivCenter>
                <a className="dumix-btn" href={url}>Ver video</a>
            </DivCenter>
        </div>
    );
}

export default TagVideo;