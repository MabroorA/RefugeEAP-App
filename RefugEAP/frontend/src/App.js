import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import EAPPage from "./pages/EAPPage";
import Guidelines from "./pages/Guidelines";
import Reuse from "./pages/Reuse";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import JoinUs from "./pages/JoinUs";
import BlogSubmission from "./pages/BlogSubmission";
import { SharedLayout } from "./pages/SharedLayout";
import { BlogLayout } from "./pages/BlogLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AllBlogs from "./pages/dashboard/AllBlogs";
import BaseLayout from "./pages/dashboard/BaseLayout";
import AddBlog from "./pages/dashboard/AddBlog";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="refugeap" element={<EAPPage />} />
          <Route path="join" element={<JoinUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="Reuse" element={<Reuse />} />
          <Route path="Guidelines" element={<Guidelines />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:blogId" element={<BlogLayout />} />
          <Route path="form" element={<BlogSubmission />} />
        </Route>
        <Route>
          <Route
            path="/dashboard"
            element={
              // <ProtectedRoute>
              <BaseLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="all-blogs" element={<AllBlogs />} />
            <Route path="add-blog" element={<AddBlog />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
