import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import MyFormComponent from './Components/MyFormComponent';

export default function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MyFormComponent />}/>
        </Routes>
    </BrowserRouter>
  </>
  )
}

