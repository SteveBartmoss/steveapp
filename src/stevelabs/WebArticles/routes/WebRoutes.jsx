import React from 'react'
import { Route, Routes } from "react-router-dom";
import Opinion1 from '../Articles/Opinion1';
import LetVsVar from '../Articles/LetVsVar';



const WebRoutes = () => {
  return (
    <div>
         <Routes>
                <Route path="opinion1" element={<Opinion1/>} />

                <Route path='letvsvar' element={<LetVsVar />} />
         </Routes>
      
    </div>
  )
}

export default WebRoutes
