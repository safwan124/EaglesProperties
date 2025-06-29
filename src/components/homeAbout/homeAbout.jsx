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
          // No featured property found, use fallback image
          setFeaturedProperty({
            image: '/foo2.jpg',
            title: 'Default Featured Property',
          });
        }
      } catch (err) {
        // Only set error for real API failures, not for empty result
        setFeaturedProperty({
          image: '/foo2.jpg',
          title: 'Default Featured Property',
        });
        console.error(err);
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
          ) : (
            <img
              src={featuredProperty?.image || '/foo2.jpg'}
              onError={(e) => { e.target.src = '/foo2.jpg'; }}
              alt={featuredProperty?.title || 'Featured Property'}
              className="featured-property-image"
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeAbout;
