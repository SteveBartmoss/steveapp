import React from "react";
import Card from "./Card";
import sys32 from "../img/system32.jpg";

function Videos(){
    return(
        <div className="Videos">
            <Card imgUrl={sys32} title="Borrar Sytem32" paragraph="La popular broma de borrar"/>
        </div>
    );
}

export default Videos;
