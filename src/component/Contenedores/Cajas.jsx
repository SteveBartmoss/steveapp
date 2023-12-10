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

export function ReadDiv({children}){
    return(
        <div className="div-read">
            {children}
        </div>
    );
}

export function Expositor({children}){
    return(
        <div className="div-exp">
            {children}
        </div>
    );
}

export function TitleExp({children}){
    return(
        <div className="title-exp">
            {children}
        </div>
    );
}