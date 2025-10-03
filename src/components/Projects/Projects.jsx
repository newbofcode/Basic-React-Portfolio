import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import pjtimg1 from "../../assets/img/project-img1.png";
import pjtimg2 from "../../assets/img/project-img2.png";
import pjtimg3 from "../../assets/img/project-img3.png";
import "./Projects.css";

export const Projects = () => {
  const projects = [
    {
      title: "Movie Search",
      description:
        "React site made using typescript and API calls to a Movie API",
      imgUrl: pjtimg1,
      videoUrl: "",
      github: "https://github.com/newbofcode/Basic-React-Movie-Site",
    },
    {
      title: "This basic portfolio",
      description: "Designed with React and bootstrap",
      imgUrl: pjtimg2,
      videoUrl: "",
      github: "https://github.com/newbofcode/Basic-React-Portfolio",
    },
    {
      title: "Business Startup",
      description: "Design & Dev",
      imgUrl: pjtimg3,
      videoUrl: "",
      github: "#",
    },
  ];

  return (
    <>
      <Container className="projects" id="projects">
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my projects</p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav
                    variant="pills"
                    className="flex-column"
                    defaultActiveKey="/home"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="third">Third tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </>
  );
};
