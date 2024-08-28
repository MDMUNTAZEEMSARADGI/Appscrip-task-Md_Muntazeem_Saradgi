import React from 'react';
import Header from './Header';
import Router from '../Routers/Router';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <Router />
            <Footer />
        </>
    )
}

export default Layout