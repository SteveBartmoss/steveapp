import React, { useEffect, useState } from "react";
import { DivArticle, DivCenter, DivColum, DivMosaico, DivRow } from "../../../component/Contenedores/Cajas";
import axios from "axios";
import RandChar from "../../component/RandChar";
import CardCharacter from "../../component/CardCharacter";

function RickosoApp() {

    const [randChar, setRandChar] = useState({});
    const [mainChar, setMainChar] = useState([]);

    const getRandomCharacter = async () => {

        let min = Math.ceil(0);
        let max = Math.floor(827);
        let character = Math.floor(Math.random() * (max - min) + min);

        const response = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);

        setRandChar(response.data);

    }

    const listMainCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/[1,2,3,4,5]');
        setMainChar(response.data);
    }

    useEffect(() => {
        getRandomCharacter();
        listMainCharacters();
    }, []);

    return (
        <>
            <div className="div-ricoso-page">

                <div className="div-main-card" >
                    <DivRow>
                        <div className="img-main-card">
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ204dm12MmJzZXJsYmI3ZThzZzhieWNtdXZ0aDA0cnA1N2Jlb3d0eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lI4bYmcsPJX9Go/giphy.gif" />
                        </div>
                        <div className="div-main-content">
                            <DivColum>
                                <h1 className="tittle-app">Rickoso App</h1>
                                <p className="content-card">
                                    Ponte ricoso con esta aplicacion en la que
                                    encontrartas informacion de rick and morty
                                </p>
                            </DivColum>
                        </div>
                    </DivRow>
                </div>

                <DivCenter>

                    <DivColum>

                        <DivCenter>
                            <h1 className="tittle-app">Personaje aleatorio</h1>
                        </DivCenter>

                        <div className="back-portal">

                            <RandChar character={randChar} />

                        </div>

                    </DivColum>

                </DivCenter>

                <DivCenter>
                    <h1 className="tittle-app">Personajes principales</h1>
                </DivCenter>

                <DivArticle>
                    <DivMosaico>
                        {
                            mainChar.map(
                                perso => <CardCharacter key={perso.id} character={perso} />
                            )
                        }
                    </DivMosaico>
                </DivArticle>
                
            </div>
        </>
    );
}

export default RickosoApp;