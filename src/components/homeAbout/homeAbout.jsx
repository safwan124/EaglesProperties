import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Spinner } from 'react-bootstrap';
import './homeAbout.css';
import axios from 'axios';

const HomeAbout = ({ handleClick }) => {

  const [featuredProperty, setFeaturedProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProperty = async () => {
      try {
        const response = await axios.get('https://api.theeaglesrealty.com/properties');
        const featured = response.data.find((property) => property.featured === true);
        if (featured) {
          setFeaturedProperty(featured);
        } else {
          setError('No featured property found.');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'No featured property found');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperty();
  }, []);

  return (
    <Container className="home-about-container my-5 p-5">
      <Row className="align-items-center">
        <Col md={6} className="text-col">
          <h1 className="about-heading">Where Dreams Take Flight</h1>
          <h4 className="about-subheading">
            The Eagles, your trusted real estate companion for two decades. Expert guidance, personalized care, and a passion for turning your vision into reality.
          </h4>
        </Col>
        <Col md={6} className="featured-property" onClick={handleClick}>
        <h1>Featured Property</h1>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : featuredProperty ? (
            <img
              src={featuredProperty.image || '/noimg.png'}
              alt={featuredProperty.title || 'Featured Property'}
              className="featured-property-image"
            />
          ) : (
            <p>No featured property available</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAbout;
