import React from "react";
import { getFavById } from "./Helpers/getFav";
import { useCarrusel } from "./Hooks/useCarrusel";

export const Grid=()=>{

    //const [id,setId] = useState(1);
    const {counter,siguiente,anterior}=useCarrusel();
    const favorito=getFavById(counter);

    return(
        <>
        <div>
        <div className="InfoSteve">
            {favorito.map((favorito)=>(
                <>
                    
                    <img className="imgSteve" src={favorito.imagen} alt="imagenfav"/>
                    <div>
                        <h1 className="title1 Content">{favorito.titulo}</h1>
                        <p className="Content">{favorito.parrafo}</p>
                        <ul>
                            {favorito.titulos.map((parrafo)=>(<li className="Content">{parrafo}</li>))}
                        </ul>
                    </div>
                </>
            ))}
        </div>
        <button className="Btn" onClick={()=>siguiente()}>Siguiente</button>
        <button className="Btn" onClick={()=>anterior()}>Anterior</button>
        </div>
        </>
    );
}