import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import "../styles/Default.css";
import "../styles/Work.css";

function WorkModal(props) {
  let a = props.tech;

  let projectSkills = a == undefined ? [""] : a;

  return (
    <Modal show={props.show} onHide={props.hide} size="lg" centered>
      <Modal.Header closeButton closeVariant="white">
        <h3 className="mb-0 w-100 text-center">Project Details</h3>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row>
            <Col lg={4}>
              <Card className="p-0">
                <span
                  style={{ backgroundImage: `url(${props.image})` }}
                  className="m-0"
                ></span>
              </Card>
            </Col>

            <Col lg={8} className="mt-4 mt-lg-0">
              <div className="title">
                <h3 className="d-inline-block me-3">Title:</h3>
                <h4 className="d-inline-block">{props.title}</h4>
              </div>

              <div className="description">
                <p style={{ textAlign: "justify" }}>{props.desc}</p>
              </div>

              <div className="technologies d-flex flex-wrap justify-content-center">
                {projectSkills.map((skill, id) => {
                  return (
                    <h6 className="mx-2" key={id}>
                      {skill}
                    </h6>
                  );
                })}
                <h6 className="mx-2">{}</h6>
              </div>

              <div className="buttons d-flex flex-wrap justify-content-evenly mt-xs-3">
                <Button
                  className="main-btn primary-btn mt-3 mt-xs-0"
                  href={props.github}
                  target="_blank"
                >
                  GitHub Link
                </Button>

                <Button
                  className="main-btn primary-btn mt-3 mt-xs-0"
                  href={props.host}
                  target="_blank"
                >
                  Official Link
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default WorkModal;
