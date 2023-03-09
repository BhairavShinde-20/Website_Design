import React from 'react';
import {Routes,Route} from "react-router-dom"
import App from './App';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Navbar from './component/Navbar';
import Ser from './component/services/Services';
import Faqs from './component/Faq/Faqs';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<App/>} />
                <Route exact path='/navbar' element={<Navbar/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/service' element={<Ser/>} />
                <Route exact path='/faq' element={<Faqs/>} />
            </Routes>
        </>
    );
};

export default Routing;