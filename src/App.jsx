import React from 'react'
import Navbar from './Comopnent/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pagess/Home'
import Footer from './Comopnent/Footer'
import Skills from './Pagess/Skills'
import AboutMe from './Pagess/AboutMe'
import Projects from "./Pagess/Projects"
import ContactMe from './Pagess/ContactMe'
import Layout from './Comopnent/Layout'


export default function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      <Route element={<Layout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/AboutMe" element={<AboutMe/>} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/ContactMe" element={<ContactMe />} />
      </Route>
    </Routes>
    <Footer/>    
    </BrowserRouter>
  )
}

