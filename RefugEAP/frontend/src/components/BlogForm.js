import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BlogForm = () => {

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleSelectChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleSelectChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };


return (
  <div id="form-container">

    <Form>

      
      <Form.Group className="mb-3" controlId="Fullname">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Affiliation">
        <Form.Label>Affiliation</Form.Label>
        <Form.Control type="text" placeholder="Enter Affiliation" />
      </Form.Group>

      <Form.Group controlId="selectRole">
      <Form.Label>Select a Role</Form.Label>
      <Form.Control
          as="select"
          value={selectedOption2} 
          onChange={handleSelectChange2}
           >
          <option value="">Select an option</option>
          <option value="option1">practitioner</option>
          <option value="option2">student</option>
          <option value="option3">research</option>
          <option value="option4">Other</option>
          </Form.Control>
      </Form.Group>         
        {selectedOption2 === "option4" && (
          <Form.Group controlId="formOtherCont">
            <Form.Label>Specify other role</Form.Label>
            <Form.Control type="text" placeholder="Specify other"/>
          </Form.Group>
          )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group controlId="formSelectCont">
        <Form.Label>Select a Contribution</Form.Label>
        <Form.Control
          as="select"
          value={selectedOption1}
          onChange={handleSelectChange1}
            >
          <option value="">Select an option</option>
          <option value="option1">Case study</option>
          <option value="option2">Testimonial</option>
          <option value="option3">Other</option>
        </Form.Control>
      </Form.Group>
          
      <Form.Group className="mb-3" controlId="ContributionTitle">
        <Form.Label>Contribution Title</Form.Label>
        <Form.Control type="text" placeholder="Enter contribution title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Intro blurb">
        <Form.Label>Introductory blurb</Form.Label>
        <Form.Control type="text" placeholder="Enter an introductory blurb" />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

  );
        };



export default BlogForm;
