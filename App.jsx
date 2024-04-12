import React from 'react'
import Home from './Home'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer>
    </Router>
  )
}

export default App
