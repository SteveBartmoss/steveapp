import React, { useEffect, useState } from "react";
import SendQuestion from "../component/SendQuestion";
import { getOracle } from "../helpers/getOracle";

function YesOrNot(){

    const [question, setQuestion]=useState('');
    const [answer, setAnswer]=useState({
        res: '',
        forced: '',
        url: ''
    });

    const onAddQuestion=(question)=>{
        setQuestion(question);
        getAnswer();
        //console.log(question);
    }

    const getAnswer=async()=>{
        const newAnswer=await getOracle();
        //console.log(newAnswer);
        setAnswer(prevState=>({...prevState,res: newAnswer.answer, forced: newAnswer.forced, url: newAnswer.image }));
        //console.log(answer);
    }

    return(
        <div>
            <div className="gif-div">
                <h1 className="gif-title1">Yes or Not</h1>
                <SendQuestion onNewQuestion={event=>onAddQuestion(event)} />
                <h1 className="gif-title1">{question}</h1>
                <h1 className="gif-title1">{answer.res}</h1>
                <div className="div-answer">
                    <img className="oracle-answer" src={answer.url}/>
                </div>
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

export default YesOrNot;