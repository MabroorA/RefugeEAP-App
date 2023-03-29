import React from "react";
import Blogs from "../components/Blogs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BlogPage.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

const data = {
  title: 'Blog',
  subtitle: 'If there is a topic you would like to discuss or want to contribute a post please provide further details by clicking the button below.',
  btn: 'Contribute a blog',
  url: '/form',
  style: 'blog-hero',
}

const BlogPage = () => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/form");
  };
  
  return (
    <Container className="blog-main" fluid style={{ padding: 0 }}>
      <Hero props={data} img=""/>
      <Row
        style={{
          background: "hsl(34,49%,81%)",
          margin: 0,
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="blog-blogs"
        id="blogs"
      >
        <div
          className="blog-title"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>Blog</h1>
        </div>
        <Blogs style={{ display: "flex" }} />
      </Row>
    </Container>
  );
};

export default BlogPage;
