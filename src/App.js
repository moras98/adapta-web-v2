import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout/Layout';
import Home from './routes/Home/Home';

import en from './locales/en'; 
import es from './locales/es'; 
import Experience from './routes/Experience/Experience';
import About from './routes/About/About';
import Team from './routes/Team/Team';
import Contact from './routes/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout lenguage={'es'}/>}>
          <Route index element={<Home lenguaje={es}/>}/>
          <Route path='experiencia' element={<Experience lenguage={es}/>}/>
          <Route path='sobre-nosotros' element={ <About lenguage={es.about}/> }/>
          <Route path='equipo' element={<Team lenguage={es}/>}/>
          <Route path='contacto' element={<Contact lenguage={es}/>} />
        </Route>
        <Route path='/en' element={<Layout lenguage={'en'}/>}>
          <Route index element={<Home lenguaje={en}/>}/>
          <Route path='experience' element={<Experience lenguage={en}/>}/>
          <Route path='about-us' element={ <About lenguage={en.about}/> }/>
          <Route path='team' element={<Team lenguage={en}/>}/>
          <Route path='contact' element={<Contact lenguage={en}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
