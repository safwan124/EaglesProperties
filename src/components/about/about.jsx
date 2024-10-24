import React, { useState } from "react";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import "./about.css";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container fluid className="real-estate-stats py-5 px-5">
      <Row className="align-items-center">
        {/* Stats Content */}
        <Col lg={7} md={12} className="stats-content px-3">
          <h2>
            With <CountUp start={0} end={20} duration={10} /> years of real
            estate investment, development, and management experience, The
            Eagles has an unparalleled scale of delivery and an unmatched track
            record of customer-centric service excellence in India.
          </h2>
          <p>
            At The Eagles, we take pride in our uncompromising integrity in
            customer engagement and quality assurance, and throughout our...
            {isExpanded && (
              <span className="extra-content">
                We consistently aim to exceed expectations in every aspect of
                our business, and we have successfully delivered a wide range of
                real estate solutions for clients nationwide.
              </span>
            )}
            <span className="read-more" onClick={toggleReadMore}>
              {isExpanded ? " Show Less" : " Read More"}
            </span>
          </p>
        </Col>

        {/* Stats Numbers */}
        <Col lg={5} md={12} className="stats-numbers d-flex justify-content-around px-3">
          <div className="years-number">
            <CountUp start={0} end={20} duration={10} />
            <p>years of sustained growth and innovation</p>
          </div>
          <div className="divider">/</div>
          <div className="customers-number">
            <CountUp start={0} end={350} duration={10} />
            <p>customers served</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
