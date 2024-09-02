//import state
import { useState, useEffect } from 'react'
//import components
import { Footer, Header, AboutMePage, PortfolioPage, ResumePage, ContactPage, HomePage } from "./components"
//import router
import { BrowserRouter, Route, Routes } from "react-router-dom" 
//import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import './App.css'


function App() {
  return (
    <>
      <h1>HELO WORLD</h1>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutMePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/portfolio" element={<PortfolioPage/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/> 
    </>
  )
}

export default App
