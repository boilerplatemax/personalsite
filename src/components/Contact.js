import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";

const Contact = ({ setMessage }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const canSend =
      (form.current[0].value &&
        form.current[1].value &&
        form.current[2].value) !== "";
    if (!canSend) {
      notificationHandler("Please fill out the form");
      return;
    } else {
      notificationHandler("Message sent!");
      document.getElementById("form").reset();
    }
    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE,
        process.env.EMAIL_TEMPLATE,
        form.current,
        process.env.EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const notificationHandler = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };
  return (
    <Form ref={form} onSubmit={sendEmail} className="w-100 mb-3" id="form">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="user_name" placeholder="Name" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="user_email" placeholder="Email" />
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" name="message" placeholder="Message" />
      </Form.Group>

      <Button type="submit" className="btn btn--secondary">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
