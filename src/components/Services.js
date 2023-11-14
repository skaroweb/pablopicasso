import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard";
import "../styles/Default.css";
import "../styles/Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <Container className="py-5">
        <Row className="py-3 mt-5 section-head text-center">
          <Col>
            <h2>Services</h2>
            <h5>What I Can Do?</h5>
          </Col>
        </Row>

        <ServiceCard />
      </Container>
    </section>
  );
}

export default Services;
