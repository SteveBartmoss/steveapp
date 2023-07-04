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
        <div className="div-input">
            <form onSubmit={(event)=>onSumit(event)}>
                <input type="text" className="gif-search"
                placeholder="why are you here?"
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
                />
            </form>
        </div>
    );


}

export default SendQuestion;