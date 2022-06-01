import React from "react";
import "./App.css";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Films from './Films';
import Characters from './Characters';
import Planets from './Planets';
import Spaceships from './Spaceships';
import Species from './Species';

const App = () => {
  return (
   
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Films" element={<Films />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/Spaceships" element={<Spaceships />} />
        <Route path="/Species" element={<Species />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
