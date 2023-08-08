import React from "react";

const CreatorSing=({autor,date,img,grade})=>{
    return(
        <>
            <div className="div-sing">
                <img className="img-sing" src={img} />
                <div className="content-sing">
                    <p>Por <span className="autor">{autor}</span> {grade}</p>
                    <p>{date}</p>
                </div>
            </div>
        </>
    );
}

export default CreatorSing;