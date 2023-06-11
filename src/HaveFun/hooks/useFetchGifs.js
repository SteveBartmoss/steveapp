import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs=(value)=>{

    const [images, setImages]=useState([]);
    const [isLoading, setIsLoading]=useState(true);

    const getImages=async()=>{
        const newImages=await getGifs(value);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{
        getImages(); 
    },[]);

    return{
        images: images,
        isLoading: isLoading
    }
}