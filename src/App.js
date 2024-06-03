import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./componentes/Home/Home";
import Login from "./componentes/Login/Login";
import Principal from "./componentes/Principal/Principal";
import Fatura from './componentes/Fatura/Fatura';
import CartaoVirtual from './componentes/CartaoVirtual/CartaoVirtual';
import OnboardingPF from './componentes/OnboardingPF/OnboardingPF';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      
        <Route path='/login' element={<Login />} />
     
        <Route path='/principal' element={<Principal />} />

        <Route path='/fatura' element={<Fatura />} />

        <Route path='/cartao-virtual' element={<CartaoVirtual />} />

        <Route path='/onboarding-PF' element={<OnboardingPF />} />

      </Routes>
    </Router>
  );
}

export default App;
