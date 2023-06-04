import React from "react";
import { getGifs } from "../helpers/getGifs";

function GifGrid({value}){

    getGifs(value);

    return(
        <>
            <h1 className="title1">{value}</h1>
            <p  className="Content">hi</p>
        </>
    );
}

export default GifGrid;