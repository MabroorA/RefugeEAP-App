import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogCard = ({blog}) => {
  const { id, title, info } = blog;
  return (
    <Card id={id} style={{ width: "100%", background: "hsl(34,49%,81%)" }}>
      <Card.Body style={{ margin: "2rem" }}>
        <Card.Title style={{ color: "rgb(131, 131, 130)" }}>{title}</Card.Title>
        <Card.Text className="blog">{info}</Card.Text>
        <Button variant="outline-dark">More</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
