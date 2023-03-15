import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import EAPPage from "./pages/EAPPage";
import Reuse from "./pages/Reuse";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import JoinUs from "./pages/JoinUs";
import BlogSubmission from "./pages/BlogSubmission";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="refugeap" element={<EAPPage />} />
        <Route path="join" element={<JoinUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="Reuse" element={<Reuse />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="form" element={<BlogSubmission />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
