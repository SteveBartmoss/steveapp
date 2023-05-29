import React, { useState } from "react";

function PushCategory({onNewCategory}){

    const [inputValue, setInputValue]=useState();

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSumit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().lenght<=1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form onSubmit={(event)=>onSumit(event)}>
            <input 
            type="text" 
            placeholder="buscar un gif" 
            value={inputValue}
            onChange={(event)=>onInputChange(event)}
            />
        </form>
    );

}

export default PushCategory;