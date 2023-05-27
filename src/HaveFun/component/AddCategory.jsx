import React, { useState } from "react";

function AddCategory(){

    const [input, setInput] = useState(''); 

    const onInputChange=(event)=>{
        setInput(event.target.value);
    }

    const onSumit=(event)=>{
        event.preventDefault();
    }

    return(
        <form onSubmit={(event)=>onSumit(event)}>
            <input 
            type="text" 
            placeholder="buscar un gif" 
            value={input}
            onChange={(event)=>onInputChange(event)}
            />
        </form>
    );
}

export default AddCategory;