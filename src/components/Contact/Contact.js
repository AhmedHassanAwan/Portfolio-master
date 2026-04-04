
import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contact() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact">
      <Container fluid>
        <Container className="home-content text-center">
          <h1 className="fw-bold mb-3">Get In Touch</h1>
          <h5 className="text-muted mb-4">
            Have a project in mind or want to collaborate?
            Fill out the form below and I’ll get back to you as soon as possible.
          </h5>

          <Form.Control
            placeholder="Your Name"
            className="w-50 mx-auto mt-4"
            value={names}
            onChange={(e) => setNames(e.target.value)}
          />

          <Form.Control
            placeholder="Your Email"
            type="email"
            className="w-50 mx-auto mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Control
            as="textarea"
            placeholder="Write your message here..."
            className="w-50 mx-auto mt-3"
            style={{ height: "10rem" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button className="mt-4 px-4">Send Message</Button>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;
