import React from "react";
import "../../App.css";

export function Paper({children}){
    return(
        <div className="paper">
            {children}
        </div>
    );
}

export function TitleDiv({children}){
    return(
        <div className="div-title">
            {children}
        </div>
    );
}