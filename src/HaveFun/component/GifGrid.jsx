import React, { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItems from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({value}){

    const {images, isLoading}=useFetchGifs(value);


    return(
        <>
            <h1 className="title1">{value}</h1>
            {
                isLoading ? (<h1 className="title1">Cargando...</h1>):null
            }
            <div>
                {images.map(image=>{
                    return <GifItems key={image.id} title={image.tile} url={image.url}/>
                })}
            </div>
        </>
    );
}

export default GifGrid;