import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
