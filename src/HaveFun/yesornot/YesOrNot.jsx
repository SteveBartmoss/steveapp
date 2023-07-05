import React, { useState } from "react";
import SendQuestion from "../component/SendQuestion";
import { getOracle } from "../helpers/getOracle";
import FooterHave from "../component/FooterHave";
import OracleAnswer from "../component/OracleAnswer";

function YesOrNot(){

    const [question, setQuestion]=useState('');

    const [isQuestion, setIsQuestion]=useState(false);

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
        setIsQuestion(true);
        //console.log(answer);
    }

    return(
        <div>
            <div className="gif-div">
                <h1 className="gif-title1">Yes or Not</h1>
                <SendQuestion onNewQuestion={event=>onAddQuestion(event)} />
                { isQuestion ? ( <OracleAnswer res={answer.res} url={answer.url} ques={question}/>): <h1 className="gif-title1">Ask me someting :D</h1>
                }
            </div>

            <FooterHave />
            
        </div>
    );
}

export default YesOrNot;