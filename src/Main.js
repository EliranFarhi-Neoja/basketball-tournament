import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login' 
import Manager from './components/Manager'
import Standings from './components/Standings'
import SubmitScore from './components/SubmitScore'

const Main = () => {
  return (
   <>
    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/submit-scores" element={<SubmitScore/>} />
              <Route path="/standings" element={<Standings/>} />
              <Route path="/manager" element={<Manager/>} />
              <Route path="/home" element={<Home/>} />
            </Routes>
          </BrowserRouter>
   </>
  )
}

export default Main