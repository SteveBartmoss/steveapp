import React, { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({value}){

    const [images, setImages]=useState([]);

    const getImages=async()=>{
        const newImages=await getGifs(value);
        setImages(newImages);
    }

    useEffect(()=>{
        getImages(); 
    },[]);

    return(
        <>
            <h1 className="title1">{value}</h1>
        </>
    );
}

export default GifGrid;