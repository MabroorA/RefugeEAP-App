import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BlogCard = () => {
  return (
    <Card style={{ width: "18rem", background: "hsl(44, 49%, 81%)" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">More</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard