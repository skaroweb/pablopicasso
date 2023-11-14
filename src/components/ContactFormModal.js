import React from "react";
import { Button, Modal } from "react-bootstrap";

function ContactFormModal(props) {
  return (
    <Modal show={props.show} onHide={props.hide} centered>
      <Modal.Header closeButton closeVariant="white">
        <h5>Message Sent Successful</h5>
      </Modal.Header>

      <Modal.Body>
        <h5>Dear {props.personName},</h5>
        <p>Thank you for sending a message</p>
        <p>
          Your message has been received. I will contact you within 24 hours.
        </p>

        <h5>Regards,</h5>
        <h4>Mithun Kumar</h4>
      </Modal.Body>
    </Modal>
  );
}

export default ContactFormModal;
