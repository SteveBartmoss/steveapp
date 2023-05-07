import React, { useState } from "react";

function AddCategory(){

    const [input, setInput] = useState(''); 

    const onInputChange=(event)=>{
        setInput(event.target.value);
    }

    return(
        <input 
        type="text" 
        placeholder="buscar un gif" 
        value={input}
        onChange={(event)=>onInputChange(event)}
        />
    );
}

export default AddCategory;