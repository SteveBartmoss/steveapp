import React, { useState } from "react";
//import AddCategory from "../component/AddCategory";
import PushCategory from "../component/PushCategory";

function GifApp(){

    const [categories, setCategories] = useState(['hack']);

    const onAddCategory = (newCategory) =>{

        //se valida que el elemento a insertar no exista en el arreglo
        if (categories.includes(newCategory) ) return;
        //se crea un nuevo arreglo y al final se le agrega la nueva categoria
        setCategories([newCategory,...categories]);
        // segunda opcion en la segunda opcion se utilizan callbacks
        //setCategories(cat=>['amd',...categories])
    }


    return(
        <>
            <h1 className="title1">GifExpertApp</h1>

            <PushCategory  onNewCategory={event=>onAddCategory(event)}/>

            {/*<AddCategory newCategorie={setCategories} elements={categories}/>*/}


            <ol>
                { categories.map(category =>{
                    return <li key={ category}className="Content">{category}</li>
                })}
            </ol>

        </>
    );
}

export default GifApp;