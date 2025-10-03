import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
import emailjs from "emailjs-com";
import "./Contact.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Customize these with your actual EmailJS values
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      message: formDetails.message,
      title: "Contact Form Submission", // Optional: used in subject
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
        setButtonText("Send");
      },
      (error) => {
        console.error("FAILED...", error);
        setStatus({
          success: false,
          message: "Message failed to send. Please try again later.",
        });
        setButtonText("Send");
      }
    );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message to me"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  ></textarea>
                </Col>
                <Col sm={12} className="px-1">
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success ? "success" : "danger"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
