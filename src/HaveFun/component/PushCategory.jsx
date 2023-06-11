import React, { useState } from "react";

function PushCategory({onNewCategory}){

    const [inputValue, setInputValue]=useState('');

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
        <div className="div-input">
            <form onSubmit={(event)=>onSumit(event)}>
                <input className="gif-search"
                type="text" 
                placeholder="buscar un gif" 
                value={inputValue}
                onChange={(event)=>onInputChange(event)}
                />
            </form>
        </div>
    );

}

export default PushCategory;