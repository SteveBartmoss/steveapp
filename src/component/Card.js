import React from "react";
import '../App.css';

export function Card({children,imgUrl,title,paragraph,urlVideo}){
    return(
        <div className="card">
            {children}
        </div>
    );
}


export function CardTitle({children}){
    return(
        <div className="card-title">
            {children}
        </div>
    );
}

export function CardText({children}){
    return(
        <div className="card-text">
            {children}
        </div>
    );   
}

export function CardHeader({children}){
    return(
        <div className="card-header">
            {children}
        </div>
    );
}

export function CardFooter({children}){
    return(
        <div className="card-footer">
            {children}
        </div>
    );
}