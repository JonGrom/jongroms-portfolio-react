//import state
import { useState, useEffect } from 'react'
//import components
import { Footer, Header, AboutMePage, PortfolioPage, ResumePage, ContactPage} from "./components"
//import router
import { BrowserRouter, Route, Routes } from "react-router-dom" 
//import bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="container-fluid">
            <Routes>
              <Route path="/" element={<AboutMePage/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/portfolio" element={<PortfolioPage/>}/>
              <Route path="/resume" element={<ResumePage/>}/>
            </Routes>
        </div>
        <Footer/> 
      </BrowserRouter>
    </>
  )
}

export default App
