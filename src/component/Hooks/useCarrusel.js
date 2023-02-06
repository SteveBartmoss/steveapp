import { useState } from "react";
import { Favoritos } from "../Data/Favoritos";


export const useCarrusel=(id=1)=>{
    const [counter, setCounter]=useState(id);

    const siguiente=()=>{
        if(counter>=Favoritos.length){
            setCounter(1);
            return;
        }
        setCounter(counter+1);
    }

    const anterior=()=>{
        if(counter<=1){
            setCounter(Favoritos.length);
            return;
        }
        setCounter(counter-1);
    }

    return{
        counter,
        siguiente,
        anterior,
    }
}