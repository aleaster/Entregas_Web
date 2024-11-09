import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import Humans from './Pages/Humans/Humans';
import NotHuman from './Pages/NotHuman/NotHuman';
import About from './Pages/About/About';
import NavBar from './Componentes/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router> 
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Humans" element={<Humans/>} />
          <Route path="/NotHuman" element={<NotHuman/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
