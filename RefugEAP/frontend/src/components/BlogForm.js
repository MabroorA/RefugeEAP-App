import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BlogForm = () => {
  const [validated, setValidated] = useState(false);

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [otherRole, setOtherRole] = useState("");
  const [contribution, setContribution] = useState("");
  const [otherContribution, setOtherContribution] = useState("");
  const [conTitle, setConTitle] = useState("");
  const [intro, setIntro] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div id="form-container">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="selectTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              as="select"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            >
              <option value="">Select an option</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="Affiliation">
            <Form.Label>Affiliation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Affiliation"
              name="affiliation"
              value={affiliation}
              onChange={(event) => setAffiliation(event.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
              <Form.Control.Feedback type='invalid'>
                Please provide a valid email
              </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group controlId="selectRole" className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                required
                name="role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Practitioner">Practitioner</option>
                <option value="Student">Student</option>
                <option value="Research">Research</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            {role === "Other" && (
              <Form.Group controlId="formOtherCont">
                <Form.Label>Specify other role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Specify other"
                  required
                  name="otherRole"
                  value={otherRole}
                  onChange={(event) => setOtherRole(event.target.value)}
                />
              </Form.Group>
            )}
          </Col>
          <Col>
            <Form.Group controlId="formSelectCont" className="mb-3">
              <Form.Label>Type of Contribution</Form.Label>
              <Form.Control
                as="select"
                required
                name="contribution"
                value={contribution}
                onChange={(event) => setContribution(event.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Case study">Case study</option>
                <option value="Testimonial">Testimonial</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            {contribution === "Other" && (
              <Form.Group controlId="formOtherCont" className="mb-3">
                <Form.Label>Specify other contribution</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Specify other"
                  required
                  name="otherContribution"
                  value={otherContribution}
                  onChange={(event) => setOtherContribution(event.target.value)}
                />
              </Form.Group>
            )}
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="ContributionTitle">
          <Form.Label>Contribution Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contribution title"
            required
            name="contributionTitle"
            value={conTitle}
            onChange={(event) => setConTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Intro blurb">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter an introductory blurb"
            required
            name="intro"
            value={intro}
            onChange={(event) => setIntro(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
