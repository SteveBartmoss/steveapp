import React from "react";

function OracleAnswer({res, url, ques}){

    return(
        <>
        <h1 className="gif-title1">{ques}</h1>
        <h1 className="gif-title1">{res}</h1>
        <div className="div-answer">
            <img className="oracle-answer" src={url} alt="Ask me Question"/>
        </div>
        </>
    );

}

export default OracleAnswer;
