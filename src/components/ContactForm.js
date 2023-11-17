import React, { useState, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import formValidate from "../validations/formValidate";
import { useButtonColorRemover } from "../custom_hooks/useButtonColorRemover";
import ContactFormModal from "./ContactFormModal";

function ContactForm() {
  useButtonColorRemover();

  const form = useRef();

  let initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  let [formValues, setFormValues] = useState(initialFormValues);
  let [contactModal, setContactModal] = useState(false);

  function formValuesChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;

    setFormValues((lastValue) => {
      if (fieldName === "first_name") {
        return {
          firstName: fieldValue,
          lastName: lastValue.lastName,
          email: lastValue.email,
          message: lastValue.message,
        };
      } else if (fieldName === "last_name") {
        return {
          firstName: lastValue.firstName,
          lastName: fieldValue,
          email: lastValue.email,
          message: lastValue.message,
        };
      } else if (fieldName === "email") {
        return {
          firstName: lastValue.firstName,
          lastName: lastValue.lastName,
          email: fieldValue,
          message: lastValue.message,
        };
      } else if (fieldName === "message") {
        return {
          firstName: lastValue.firstName,
          lastName: lastValue.lastName,
          email: lastValue.email,
          message: fieldValue,
        };
      }
    });
  }

  function sendForm() {
    emailjs
      .sendForm(
        "service_peay9xc",
        "template_rglv7tz",
        form.current,
        "NBdUeKnlNAh4Pl5-0"
      )
      .then(
        (result) => {
          console.log(result);
          setContactModal(true);
          resetForm();
        },
        (error) => {
          console.log(error);
          alert("Message Failed Due To Network Error");
        }
      );

    return true;
  }

  function resetForm() {
    let ContactForm = document.querySelector(".contact-form");
    ContactForm.reset();
    // document.location.reload("#contact");
    setFormValues(initialFormValues);
  }

  function formSubmit(event) {
    event.preventDefault();

    if (formValidate(formValues) == true) {
      console.log("Success");
      let sendFormResult = sendForm();

      console.log(contactModal);
    }
  }

  return (
    <>
      <Form
        ref={form}
        className="contact-form"
        onSubmit={(event) => formSubmit(event)}
      >
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="user_first_name">First Name</Form.Label>
              <Form.Control
                type="text"
                id="user_first_name"
                placeholder="Enter your first name"
                name="first_name"
                onChange={(event) => {
                  formValuesChange(event);
                }}
              />
              <Form.Text>Error Message</Form.Text>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label htmlFor="user_last_name">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="user_last_name"
                placeholder="Enter your last name"
                name="last_name"
                onChange={(event) => formValuesChange(event)}
              />
              <Form.Text>Error Message</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="user_email">Email</Form.Label>
              <Form.Control
                type="text"
                id="user_email"
                placeholder="Enter your email address"
                name="email"
                onChange={(event) => formValuesChange(event)}
              />
              <Form.Text>Error Message</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="user_message">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                id="user_message"
                placeholder="Enter your message here"
                name="message"
                onChange={(event) => formValuesChange(event)}
              />
              <Form.Text>Error Message</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button
              type="submit"
              className="main-btn primary-btn w-100 mt-3 submit-btn"
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>

      <ContactFormModal
        show={contactModal}
        hide={() => {
          setContactModal(false);
        }}
        personName={`${formValues.firstName} ${formValues.lastName}`}
      />
    </>
  );
}

export default ContactForm;
