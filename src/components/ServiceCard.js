import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Row } from "react-bootstrap";
import ServicesContext from "../contexts/servicesContext";
import "../styles/Default.css";
import "../styles/Services.css";

function ServiceCard() {
  let servicesList = useContext(ServicesContext);

  return (
    <Row
      xs={1}
      md={2}
      lg={3}
      className="service-cards g-4 mt-2 text-center pb-5"
    >
      {servicesList.map((service, id) => {
        return (
          <Col key={id}>
            <Card className="h-100 py-md-3 py-2 px-2">
              <Card.Body>
                <div className="card-icon mx-auto mb-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={service.serviceIcon} />
                </div>
                <Card.Title className="pt-3 pb-2 mb-0">
                  {service.serviceName}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default ServiceCard;
