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

export function BackExp({children}){
    return(
        <div className="back-exp">
            {children}
        </div>
    );
}

export function GridPerfil({children}){
    return(
        <div className="grid-perfil">
            {children}
        </div>
    );
}

export function DivCurso({children}){
    return(
        <div className="div-curso">
            {children}
        </div>
    );
}

export function DivRead({children}){
    return(
        <div className="div-read">
            {children}
        </div>
    );
}

export function DivCli({children}){
    return(
        <div className="cli">
            {children}
        </div>
    );
}

export function DivCliTittle({children}){
    return(
        <div className="title-cli">
            {children}
        </div>
    );
}

export function DivCliBody({children}){
    return(
        <div className="body-cli">
            {children}
        </div>
    );
}