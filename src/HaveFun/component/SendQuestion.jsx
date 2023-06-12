import React, { useState } from "react";

function SendQuestion({onNewQuestion}){

    const [inputValue, setInputValue]=useState('');

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }


}

export default SendQuestion;