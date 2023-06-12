import React from "react";
import { Route, Routes } from "react-router-dom";
import GifApp from "../gifapp/gifMain";
import RickosoApp from "../rickoso/rickosoMain";
import MarvelApp from "../marvel/marvelMain";
import YesOrNot from "../yesornot/YesOrNot";

function HaveFunRouter(){
    return(
        <>
            <Routes>
                <Route path="gifapp" element={<GifApp />}/>
                <Route path="rickosoapp" element={<RickosoApp />}/>
                <Route path="marvelapp" element={<MarvelApp />}/>
                <Route path="yesornotapp" element={<YesOrNot />} />
            </Routes>
        </>
    );
}

export default HaveFunRouter;