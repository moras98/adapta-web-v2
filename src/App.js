import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout/Layout';
import Home from './routes/Home/Home';

import en from './locales/en'; 
import es from './locales/es'; 
import Experience from './routes/Experience/Experience';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout lenguage={'es'}/>}>
          <Route index element={<Home lenguaje={es}/>}/>
          <Route path='experiencia' element={<Experience lenguage={es}/>}/>
        </Route>
        <Route path='/en' element={<Layout lenguage={'en'}/>}>
          <Route index element={<Home lenguaje={en}/>}/>
          <Route path='experience' element={<Experience lenguage={en}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
