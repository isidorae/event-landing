import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import NavBar from './components/NavBar'

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
