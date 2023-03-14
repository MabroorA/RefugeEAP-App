import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function BlogForm () {
  const [selectedOption, setSelectedOption] = useState('');
  const [customValue, setCustomValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setCustomValue('');
  };

  const handleCustomInputChange = (event) => {
    setSelectedOption('custom');
    setCustomValue(event.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="Fullname">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="Enter Full name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Affiliation">
        <Form.Label>Affiliation</Form.Label>
        <Form.Control type="text" placeholder="Enter Affiliation" />
      </Form.Group>
      <Form.Group controlId="formSelectRole">
        <Form.Label>Select a role or please specify other</Form.Label>
        <Form.Control as="select" value={selectedOption} onChange={handleSelectChange}>
          <option value="option1">Practitioner</option>
          <option value="option2">Student</option>
          <option value="option3">Research</option>
          <option value="option3">Other</option>
        </Form.Control> 
        {selectedOption === 'Other' && (
          <Form.Control type="text" value ={customValue} onChange={handleCustomInputChange}
          placeholder="Other option" />
        ) }
      </Form.Group>
      <Form.Group controlId="formSelectcont">
        <Form.Label>Select type of Contribution</Form.Label>
        <Form.Control as="select">
          <option value="option1">Case study</option>
          <option value="option2">Testimonial</option>
          <option value="option3">Other</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="ContributionTitle">
        <Form.Label>Contribution Title</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Intro blurb">
        <Form.Label>Introductory blurb</Form.Label>
        <Form.Control type="text" placeholder="Enter an introductory blurb" />
      </Form.Group>
      <Form.Group controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control as="text" rows={3} placeholder="Enter content or upload files below" />
        <Form.File id="custom-file" label="Choose file" custom />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BlogForm