import React from "react";
import "../styles/Default.css";
import "../styles/Home.css";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import DeveloperImage from "../assets/images/developer.png";
import { useButtonColorRemover } from "../custom_hooks/useButtonColorRemover";

function Home() {
  useButtonColorRemover();

  return (
    <section className="home" id="home">
      <Container className="py-5">
        <Row className="align-items-center justify-content-between flex-column-reverse flex-lg-row py-5">
          <Col
            md={6}
            lg={7}
            className="home-content text-center text-lg-start p-4 mt-2 mt-lg-0"
          >
            <h4>Hi, I am</h4>
            <h1>Mithun Kumar</h1>
            <h4>
              And I'm a{" "}
              <span className="d-md-block d-lg-inline">
                Full Stack Developer
              </span>
            </h4>

            <div className="d-flex flex-wrap justify-content-evenly justify-content-lg-start mt-sm-4">
              <Button
                href="#contact"
                as="a"
                className="main-btn primary-btn mx-1 ms-lg-0 me-lg-3 mt-3 mt-sm-0"
              >
                Contact Me
              </Button>
              <Button
                href=""
                as="a"
                className="main-btn secondary-btn hire-btn mx-1 ms-lg-0 mt-3 mt-sm-0"
              >
                Hire Me
              </Button>
            </div>
          </Col>

          <Col xs={10} sm={9} md={7} lg={5} className="home-image text-center">
            <Image src={DeveloperImage} fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
