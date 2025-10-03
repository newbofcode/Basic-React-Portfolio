import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.png";
import "./Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Front-End Developer",
    "Back-End Developer",
    "Data Science",
    "Data Analytics",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={12}>
              <span className="tagline">Welcome To my Portfolio</span>
              <h1>{`Hi! My Name is Yong Kang He`}</h1>
              <h2 className="wrap">{text}</h2>
              <p>
                I am a Computer Science graduate (3.9 GPA) with a dual academic
                background in Biology and Health Sciences, bringing a unique mix
                of technical expertise and analytical rigor. Skilled in Python,
                SQL, Power BI, and data visualization, I have hands-on
                experience with enterprise systems (SAP, Concur), automation
                tools (UiPath, ServiceNow Virtual Agent), and building
                production-ready applications.
              </p>
              <p>
                Professionally, I have contributed to PwC Canada as a Software
                Engineer, developing automation workflows, optimizing system
                documentation, and collaborating across teams to improve
                efficiency and accuracy. At McCain Foods, I supported enterprise
                platforms by validating datasets, investigating discrepancies,
                and building dashboards that improved financial reporting. As a
                Python Tutor at Toronto Metropolitan University, I guided
                students in logical thinking, secure coding, and best practices,
                reinforcing my ability to simplify complex concepts and mentor
                others.
              </p>
              <p>
                I am recognized for my attention to detail, problem-solving, and
                cross-functional collaboration, with a strong interest in data
                analysis, automation, and intelligent systems. My career goal is
                to apply these strengths to roles that bridge technology,
                analytics, and process optimization which helps organizations
                make smarter, data-driven decisions
              </p>
              <button
                onClick={() => {
                  console.log("Lets connect");
                }}
              >
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
