import React, { useState } from "react";

function SendQuestion({onNewQuestion}){

    const [inputValue, setInputValue]=useState('');

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSumit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        onNewQuestion(inputValue.trim());
        setInputValue('');
    }


}

export default SendQuestion;