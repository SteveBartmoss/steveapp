import React, { useEffect, useState } from "react";
import SendQuestion from "../component/SendQuestion";
import { getOracle } from "../helpers/getOracle";
import FooterHave from "../component/FooterHave";

function YesOrNot(){

    const [question, setQuestion]=useState('');

    const [isQuestion, setIsQuestion]=useState(true);

    const [answer, setAnswer]=useState({
        res: '',
        forced: '',
        url: ''
    });

    const onAddQuestion=(question)=>{
        setQuestion(question);
        getAnswer();
        //console.log(question);
    }

    const getAnswer=async()=>{
        const newAnswer=await getOracle();
        //console.log(newAnswer);
        setAnswer(prevState=>({...prevState,res: newAnswer.answer, forced: newAnswer.forced, url: newAnswer.image }));
        setIsQuestion(false);
        //console.log(answer);
    }

    return(
        <div>
            <div className="gif-div">
                <h1 className="gif-title1">Yes or Not</h1>
                <SendQuestion onNewQuestion={event=>onAddQuestion(event)} />
                { isQuestion ? (<h1 className="gif-title1">Ask me someting :D</h1>): null
                }
                <h1 className="gif-title1">{question}</h1>
                <h1 className="gif-title1">{answer.res}</h1>
                <div className="div-answer">
                    <img className="oracle-answer" src={answer.url} alt="Ask me Question"/>
                </div>
            </div>

            <FooterHave />
            
        </div>
    );
}

export default YesOrNot;