import React, { useEffect, useState } from "react"
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import Spreadsheet from "./components/spreadsheet"
import SearchBox from "./components/searchbox"
import styled from "styled-components"
import Modal from "./components/modal"




function App() {


  return (
    <div>
      <div>
        <Header />
        <SearchBox />
        {/* <Spreadsheet/>
      <Modal/> */}
        <Footer />
      </div>
    </div>
  )
}

export default App
