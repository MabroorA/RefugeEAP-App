import React from "react";
import Button from "react-bootstrap/Button";

const Hero4Blog = () => {
  return (
    <div
      className="blog-banner"
      style={{
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
      }}
    >
      <div style={{paddingLeft: '3rem', paddingTop: '8rem'}}>
        <h1 style={{margin: '2rem', fontSize: '5rem'}}>Blog</h1>
        <Button variant="outline-secondary" size="lg" style={{margin :'2rem'}} href="#blogs">
          READ
        </Button>{}
      </div>
    </div>
  );
};

export default Hero4Blog;
