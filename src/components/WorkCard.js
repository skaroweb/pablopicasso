import React, { useState, useContext } from "react";
import "../styles/Default.css";
import "../styles/Work.css";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import WorkContext from "../contexts/workContext";
import WorkModal from "./WorkModal";

function WorkCard() {
  let initialModalData = [
    {
      id: 0,
      projectName: "",
      projectDetails: "",
      projectTechnologies: ["", ""],
      imageURL: "",
      githubURL: "",
      hostURL: "",
    },
  ];

  let [modal, setModal] = useState(false);
  let [modalData, setModalData] = useState(initialModalData);

  let workList = useContext(WorkContext);

  function cardClick(workData) {
    setModal(true);
    setModalData(workData);
  }

  console.log(modalData);

  return (
    <>
      <WorkModal
        show={modal}
        hide={() => {
          setModal(false);
        }}
        title={modalData.projectName}
        desc={modalData.projectDetails}
        tech={modalData.projectTechnologies}
        image={modalData.imageURL}
        github={modalData.githubURL}
        host={modalData.hostURL}
      />

      {workList.map((work, i) => {
        return (
          <Col lg={4} md={4} sm={6} className="mb-4 work-card" key={i}>
            <Card
              className="p-0"
              onClick={() => {
                cardClick(work);
              }}
            >
              <span
                style={{ backgroundImage: `url(${work.imageURL})` }}
                className="m-0"
              ></span>
              <div className="overlay">
                <h6>{work.projectName}</h6>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default WorkCard;
