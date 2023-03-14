import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import EAPPage from "./pages/EAPPage";
import Reuse from "./pages/Reuse";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import JoinUs from "./pages/JoinUs";
import BlogSubmission from "./pages/BlogSubmission";

function App() {
  return (
    <React.Fragment>
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/Reuse" element={<Reuse/>}></Route>
        <Route path="/about" element={<AboutUsPage />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/refugeap" element={<EAPPage />}></Route>
        <Route path="/join" element={<JoinUs />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/form" element={<BlogSubmission />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
