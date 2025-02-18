// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Footer from './compo/footer'
import Header from './compo/header'
import Signup from './compo/signup'
import Home from './compo/home'

import './compo/file.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' index element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
