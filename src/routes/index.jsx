import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/about'
import Contact from '../pages/contact'
import Service from '../pages/service'
import Layout from '../layout/Layout'
const Router = () => {
   return (
      <>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route index path='/' element={<Home />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/service' element={<Service />} />
            </Route>
            <Route path='*' element={<h2 className='text-center'><b>Ooops, something went wrong</b></h2>} />
         </Routes>
      </>
   )
}

export default Router