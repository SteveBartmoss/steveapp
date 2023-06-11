import React, { useState } from "react";
//import AddCategory from "../component/AddCategory";
import PushCategory from "../component/PushCategory";
import GifGrid from "../component/GifGrid";
import "../../App.css";

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
        <div className="gif-div">
            <>
            
                <h1 className="title1">GifExpertApp</h1>

                <PushCategory  onNewCategory={event=>onAddCategory(event)}/>

                {/*<AddCategory newCategorie={setCategories} elements={categories}/>*/}


                { categories.map(category =>{
                    return <GifGrid key={category} value={category}/>
                })}
            </>

        </div>
    );
}

export default GifApp;