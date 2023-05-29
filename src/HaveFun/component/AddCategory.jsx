import React, { useState } from "react";

function AddCategory({newCategorie,elements}){

    const [inputValue, setInputValue] = useState(''); 

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSumit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        newCategorie(categories=>[inputValue,...categories]);
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

export default AddCategory;