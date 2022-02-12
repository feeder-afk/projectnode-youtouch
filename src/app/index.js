import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home';
import User from './users';

ReactDom.render(
    <BrowserRouter>
        <Routes>            
            <Route path="/users" element={<User />}/> 
            <Route path="/" element={<Home />}/>       
        </Routes>        
    </BrowserRouter> 
    ,document.getElementById('App')
);