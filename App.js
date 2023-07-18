import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/about"} element={<About />}/>
      </Routes>
    </div>
  )
}
