import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import "./Skills.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skills" id="skills">
        <Container>
          <Row>
            <Col>
              <div className="skill-bx">
                <h2>Skillset</h2>
                <p>Here are some of my skills for these categories!</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skill-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h5>Technical Skills/Hard Skills</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" />
                    <h5>Design & UI/UX Skills</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" />
                    <h5>Soft Skills</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h5>Project/Workflow Tools</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharp} alt="" className="background-image-left" />
      </section>
    </>
  );
};

export default Skills;
