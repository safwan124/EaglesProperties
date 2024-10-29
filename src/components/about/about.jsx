import React, { useState } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
// import member from "/profile"
import "./about.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const teamMembers = [
    { img: '/profile.png', name: "A. Prabhu Prasad", designation: "Founder" },
    { img: '/profile.png', name: "Tanisha P.Prasad", designation: "Marketing Head" },
    { img: '/profile.png', name: "Umesh B.S", designation: "Bangalore operation Head" }
  ];

  return (
    <Container fluid className="real-estate-stats px-5">
      {/* About Section */}
      <div className="about-container">
        <h1 className="text-center my-5">About Us</h1>
        <h4>
          The Eagles has been a cornerstone of excellence in real estate for
          over 20 years,
          known for its unwavering commitment to quality, reliability, and best
          service. Our projects span a wide spectrum from elegant apartments,
          residential and commercial plots to industrial spaces, lush agricultural
          lands, beautiful agricultural plantations, serene lakeside properties,
          riverside retreats and more.
        </h4>
        <h6>
          At The Eagles, we pride ourselves on our integrity and dedication to
          customer satisfaction. Every project&nbsp;
          {isExpanded && (
            <span className="extra-content">
              is a reflection of our promise to deliver the highest standards of
              service, ensuring our clients feel confident and supported throughout
              their journey. With unmatched expertise and a relentless drive for
              perfection, we continue to set new benchmarks in the real estate
              industry. When you choose The Eagles, you're choosing trust,
              innovation and excellence.
            </span>
          )}
          <span className="read-more" onClick={toggleReadMore}>
            {isExpanded ? " Show Less" : " Read More"}
          </span>
        </h6>
      </div>

      {/* Our Team Section */}
      <div className="team-section mt-5">
        <h2 className="text-center mb-5">Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} xs={12} className="text-center mb-4" key={index}>
              <div className="card team-card">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top p-5 img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.designation}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default About;
