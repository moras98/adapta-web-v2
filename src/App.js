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
import Category from './routes/Contact/Category/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='adapta-web-v2/' element={<Layout language={'es'}/>}>
          <Route index element={<Home language={es.home}/>}/>
          {/* <Route path='experiencia' element={<Experience language={es.experience}/>}/> */}
          <Route path='experiencia' element={<Experience language={es.categories}/>}/>
          <Route path='experiencia/:category' element={<Category categories={es.categories.categories}/>}/> 
          <Route path='sobre-nosotros' element={ <About language={es.about}/> }/>
          <Route path='equipo' element={<Team language={es.team}/>}/>
          <Route path='contacto' element={<Contact language={es.contact}/>} />
        </Route>
        <Route path='/en' element={<Layout language={'en'}/>}>
          <Route index element={<Home language={en.home}/>}/>
          {/* <Route path='experience' element={<Experience language={en.experience}/>}/> */}
          <Route path='experience' element={<Experience language={en.categories}/>}/>
          <Route path='experience/:category' element={<Category categories={en.categories.categories}/>}/>
          <Route path='about-us' element={ <About language={en.about}/> }/>
          <Route path='team' element={<Team language={en.team}/>}/>
          <Route path='contact' element={<Contact language={en.contact}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
