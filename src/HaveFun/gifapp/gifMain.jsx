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
        <div>
            <div className="gif-div">
            
                <h1 className="gif-title1">GifExpertApp</h1>

                <PushCategory  onNewCategory={event=>onAddCategory(event)}/>

                {/*<AddCategory newCategorie={setCategories} elements={categories}/>*/}


                { categories.map(category =>{
                    return <GifGrid key={category} value={category}/>
                })}
            </div>

            <div className="gif-footer">
                <div className="footer-item">
                    <h1 className="title1">Importante</h1>
                    <p className="Content">Esta seccion fue creada gracias al curso de 
                    react de Fernando Herrera, si quieres apoyarlo puedes comprar su 
                    curso o recomendarlo.
                    </p>

                    <p className="Content">Esta pagina forma parte de mi portafolio, si 
                    te interesa puedes contactarme en algunas de las siguientes redes.</p>

                    <p className="Content">Tambien puedes pasar a mi canal de Youtube 
                    quiza encuentras contenido que te agrade y me agregas a tus canala 
                    preferidos</p>
                </div>
                <div className="item-grid">
                    <h1 className="title1">Contacto</h1>
                    <p className="Content">stevechambitas@gmai.com</p>

                    <h1 className="title1">Githud</h1>
                    <h1 className="title1">Youtube</h1>
                    <h1 className="title1">Power by Giphy</h1>
                </div>
            </div> 
        </div>
    );
}

export default GifApp;