import { useEffect, useState } from "react"
import { getOracle } from "../helpers/getOracle";


export const useFetchQuestion=(value)=>{

    const [question, setQuestion]=useState([]);
    const [loading, setLoading]=useState(true);

    const getQuestion=async()=>{
        const newQuestion=await getOracle(value);
        setQuestion(newQuestion);
        setLoading(false);
    }

    useEffect(()=>{
        getQuestion();
    },[]);

    return{
        question: question,
        loading: loading
    }
}