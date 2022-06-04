import React, { useEffect, useState } from "react"
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Spreadsheet from "./components/spreadsheet"

function App() {


  return (
    <div className='conteiner'>
      <Header/>
      <Spreadsheet/>
      <Footer/>
    </div>
  )    
}

export default App
