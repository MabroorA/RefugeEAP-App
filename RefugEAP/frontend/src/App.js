import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AboutUsPage from './pages/AboutUsPage'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
