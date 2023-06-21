import React from "react";

function Answer({answer,url}){
    return(
        <div>
            <img src={url} />
            <p className="Content">{answer}</p>
        </div>
    );
}

export default Answer;