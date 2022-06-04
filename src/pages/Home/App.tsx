//import { useState } from 'react';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
//import Modal from '../../components/Modal';
import Footer from '../../components/Footer';

import './App.css'

function App() {
  
  return (
    <div className="container">
        <Header/>
      <main>
         <Dashboard/>
      </main>
      <div>
        <Footer/>
      </div>
    </div>
  )
}


export default App;
