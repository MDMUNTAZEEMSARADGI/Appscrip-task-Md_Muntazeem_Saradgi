import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Shop from '../pages/Shop'
import Skills from '../pages/Skills'
import Stories from '../pages/Stories'
import About from '../pages/About'
import ContactUs from '../pages/ContactUs'

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Navigate to='/shop' />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/stories' element={<Stories />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes >
        </>
    )
}

export default Router