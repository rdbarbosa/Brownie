import React from 'react'
import { HashRouter } from 'react-router-dom'

import './App.css'
import Routes from './Routes'

import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
// import Footer from '../components/template/footer'
import Message from '../components/template/messages'

export default props =>
    <HashRouter>
        <div className="app">
            <Logo/>
            <Nav/>
            <Routes/>
            {/* <Footer/> */}
            <Message />
        </div>
    </HashRouter>
    