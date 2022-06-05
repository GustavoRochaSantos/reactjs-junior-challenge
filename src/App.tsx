import React, { useEffect, useState } from "react"
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Spreadsheet from "./components/spreadsheet"
import SearchBox from "./components/searchbox"
import styled from "styled-components"


function App() {


  return (
    <div>
      <Header/>
      <SearchBox/>
      <Spreadsheet/>
      <Footer/>
    </div>
  )    
}

export default App
