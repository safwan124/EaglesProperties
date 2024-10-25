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
    <Container fluid className="real-estate-stats px-5">
      <Row className="align-items-center">
        {/* Stats Content */}
        <Col lg={7} md={12} className="stats-content px-3">
          <h2>
          The Eagles has been a cornerstone of excellence in real estate for over <strong><CountUp start={0} end={20} duration={10} /></strong> years, known for its unwavering commitment to quality, reliability and best service. Our projects span a wide spectrum, from elegant apartments, residential and commercial plots to industrial spaces, lush agricultural lands, beautiful agricultural plantations, serene lakeside properties, riverside retreats and more.
          </h2>
          <p>
          At The Eagles, we pride ourselves on our integrity and dedication to customer satisfaction. Every project...
            {isExpanded && (
              <span className="extra-content">
                 is a reflection of our promise to deliver the highest standards of service, ensuring our clients feel confident and supported throughout their journey. With unmatched expertise and a relentless drive for perfection, we continue to set new benchmarks in the real estate industry. When you choose The Eagles, you're choosing trust, innovation, and excellence.
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
