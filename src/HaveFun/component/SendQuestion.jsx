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

    return(
        <div>
            <form onSubmit={(event)=>onSumit(event)}>
                <input type="text"
                placeholder="aks me a question"
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
                />
            </form>
        </div>
    );


}

export default SendQuestion;