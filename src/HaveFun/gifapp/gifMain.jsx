import React, { useState } from "react";
import AddCategory from "./component/AddCategory";

function GifApp(){

    const [categories, setCategories] = useState([['hack']]);

    const onAddCategory = () =>{
        //se crea un nuevo arreglo y al final se le agrega la nueva categoria
        setCategories(['amd',...categories]);
    }


    return(
        <>
            <h1 className="Content">Gif expert</h1>

            <AddCategory />

            <button onClick={onAddCategory}>Agregar</button>

            <ol>
                { categories.map(category =>{
                    return <li key={ category}className="Content">{category}</li>
                })}
            </ol>

        </>
    );
}

export default GifApp;