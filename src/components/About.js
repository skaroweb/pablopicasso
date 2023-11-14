import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../styles/About.css";
import "../styles/Default.css";
import MyImage from "../assets/images/profile-pic.png";
import MuhammadAmmadHassanResume from "../assets/docs/Muhammad Ammad Hassan Resume.pdf";

function About() {
  return (
    <section className="about" id="about">
      <Container className="py-5">
        <Row className="py-3 mt-5 section-head text-center">
          <Col>
            <h2>About ME</h2>
            <h5>Who I Am?</h5>
          </Col>
        </Row>

        <Row className="py-4 align-items-center">
          <Col
            sm={8}
            lg={6}
            className="about-image mx-auto mx-lg-0 text-center"
          >
            <Image src={MyImage} width={300} fluid />
          </Col>

          <Col lg={6} className="px-4 about-content mt-4 mt-lg-0">
            <p className="mb-0" style={{ textAlign: "justify" }}>
              My name is Mithun Kumar and I am based in Erode, India. I have
              completed my graudation in Software Engineering from The
              University of XYZ.
            </p>

            <q className="text-center d-block my-4">
              <em>
                It is my passion to code and I always love to develop beautiful
                websites.
              </em>
            </q>

            <p className="mb-0" style={{ textAlign: "justify" }}>
              I have skills to create an attractive and user-friendly Frontend
              of the website. My goal is to become MERN Stack Developer and
              Cloud Computing Engineer. I have also interest in Flutter. I can
              easily work in groups/teams and always take part in the activities
              that enhances my knowledge and skills.
            </p>

            <Button
              className="main-btn primary-btn d-block mt-3 mx-auto mx-lg-0"
              href={MuhammadAmmadHassanResume}
              as="a"
              download={MuhammadAmmadHassanResume}
            >
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
