import { useFetchQuestion } from "../hooks/useFetchQuestion";
import Answer from "./Answer";


function FrameAnswer({value}){

    const [answer, loading]=useFetchQuestion(value);

    return(
        <>
            <h1 className="title1">{value}</h1>
            {
                loading ? (<h1 className="title1">Cargando... </h1>): null
            }
            <div>
                {answer.map(res=>{
                    return <Answer key={res.response} answer={res.response} url={res.url} />
                })}
            </div>
        </>
    )
}

export default FrameAnswer;