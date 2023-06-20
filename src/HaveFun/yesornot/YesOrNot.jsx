import React, { useState } from "react";
import SendQuestion from "../component/SendQuestion";

function YesOrNot(){

    const [question, setQuestion]=useState('');

    const onAddQuestion=(question)=>{
        setQuestion(question)
        console.log(question);
    }
    return(
        <div>
            <div>
                <h1 className="title1">Yes or Not</h1>
                <SendQuestion onNewQuestion={event=>onAddQuestion(event)} />

            </div>
        </div>
    );
}

export default YesOrNot;