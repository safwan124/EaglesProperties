import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './homeAbout.css';

const HomeAbout = ({ handleClick }) => {
  return (
    <Container className="home-about-container my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-col">
          <h1 className="about-heading">Where Dreams Take Flight</h1>
          <h4 className="about-subheading">
            The Eagles, your trusted real estate companion for two decades. Expert guidance, personalized care, and a passion for turning your vision into reality.
          </h4>
        </Col>
        <Col md={6} className="featured-property" onClick={handleClick}>
        <h1>
            Featured Property
        </h1>
          <img
            src="/properties/agricultural_land.jpg"
            alt="Featured Property"
            className="featured-property-image"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAbout;
