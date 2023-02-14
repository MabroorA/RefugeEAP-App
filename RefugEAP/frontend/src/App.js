import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navbar from "./components/Navbar";
import Event from "./components/Event";
import { Route, Routes } from "react-router-dom";
import EAPPage from "./pages/EAPPage";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/refugeap" element={<EAPPage />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
