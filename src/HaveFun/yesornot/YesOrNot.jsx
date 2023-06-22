import React, { useEffect, useState } from "react";
import SendQuestion from "../component/SendQuestion";
import FrameAnswer from "../component/FrameAnswer";
import { getOracle } from "../helpers/getOracle";

function YesOrNot(){

    const [question, setQuestion]=useState('');
    const [answer, setAnswer]=useState({
        res: '',
        forced: '',
        url: ''
    });

    const onAddQuestion=(question)=>{
        setQuestion(question)
        //console.log(question);
    }

    const getAnswer=async()=>{
        const newAnswer=await getOracle();
        //console.log(newAnswer);
        setAnswer(prevState=>({...prevState,res: newAnswer.answer, forced: newAnswer.forced, url: newAnswer.image }));
        console.log(answer);
    }

    useEffect(()=>{
        getAnswer();
    },[])

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