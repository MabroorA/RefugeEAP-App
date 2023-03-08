import React from "react";
import Blogs from "../components/Blogs";
import Hero4Blog from "../components/Hero4Blog";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BlogPage.css";
import Button from "react-bootstrap/Button";

const BlogPage = () => {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Row
        style={{
          background: "hsl(16,50%,72%)",
          margin: 0,
          minWidth: "100vw",
          minHeight: "90vh",
        }}
      >
        <Hero4Blog />
      </Row>
      <Row
        style={{
          background: "hsl(17,81%,56%)",
          margin: 0,
          minWidth: "100vw",
          minHeight: "50vh",
        }}
      >
        <Col style={{ background: "hsl(17,81%,85%)" }}>
          <div className="blogLeft" style={{ padding: "5em" }}>
            <h1> WHAT ARE BLOGS?</h1>
            <p style={{ paddingTop: "1em" }}>
              HERE Insights are provided by experts within the network based on
              academic research, policy documentation and case studies of the
              educational experiences of refugees, and those supporting them
              with their education. Posts are designed to encourage open
              dialogue across the network about critical issues and links to
              relevant resources within the database are provided.
            </p>
            <Button variant="outline-light" size="lg">
              READ
            </Button>{" "}
          </div>
        </Col>
        <Col>
          <div className="blogRight" style={{ padding: "5em" }}>
            <h1>Contribute a blog</h1>
            <p style={{ paddingTop: "1em" }}>
              If there is a topic you would like to discuss or want to
              contribute a post please provide further details by clicking the
              button below.
            </p>
            <Button variant="outline-light" size="lg">
              CONTRIBUTE
            </Button>{" "}
          </div>
        </Col>
      </Row>
      <Row
        style={{
          background: "hsl(34,49%,81%)",
          margin: 0,
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <h1>Blog</h1>
        <Blogs />
      </Row>
    </Container>
  );
};

export default BlogPage;
