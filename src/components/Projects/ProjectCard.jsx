import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <div className="git">
          <a href={github} style={{ zIndex: 999 }}>
            Github Repository
          </a>
        </div>
      </div>
    </Col>
  );
};
