import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/Navbar/logo.svg";
import navicon1 from "../../assets/Navbar/nav-icon1.svg";
import navicon2 from "../../assets/Navbar/nav-icon2.svg";
import navicon3 from "../../assets/Navbar/nav-icon3.svg";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const AppNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Home" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={`navbar-link ${activeLink === "home" ? "active" : ""}`}
              aria-current={activeLink === "home" ? "page" : undefined}
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`navbar-link ${
                activeLink === "skills" ? "active" : ""
              }`}
              aria-current={activeLink === "skills" ? "page" : undefined}
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`navbar-link ${
                activeLink === "projects" ? "active" : ""
              }`}
              aria-current={activeLink === "projects" ? "page" : undefined}
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kang-he/">
                <img src={navicon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/kang.he.5">
                <img src={navicon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/fallenheokang/">
                <img src={navicon3} alt="Instagram" />
              </a>
            </div>
            <a href="#connect" className="contact-me">
              <button
                className="contact-me"
                onClick={() => {
                  console.log("Connecting...");
                }}
              >
                Contact Me
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
