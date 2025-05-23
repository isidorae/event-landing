import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'

function App() {

  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={< Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
