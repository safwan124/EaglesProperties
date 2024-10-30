import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../footer/footer';
import "./blogs.css";

const cards = [1];

export default function Blogs() {
  return (
    <div>
      {/* Hero section */}
      <section className="heading bg-light py-5">
        <Container>
          <h1 className="display-4 text-center">Latest Real-Estate News</h1>
          <p className="lead text-center text-muted">
          Stay updated with the latest trends and developments in real estate! From rising property values and innovative housing solutions to regulatory changes, today's market is more dynamic than ever. Dive into the current state of the market and prepare for what's next in the world of <br />real estate!
          </p>
        </Container>
      </section>

      {/* Card Grid Section */}
      <Container className="py-5">
        <Row>
          {cards.map((card) => (
            <Col key={card} xs={12} sm={6} md={4} className="mb-4">
              <Card className="h-100 card-img">
                <Card.Img
                  variant="top"
                  src="/foo2.jpg"
                  alt={`Card image ${card}`}
                />
                <Card.Body>
                  <Card.Title className='head'>Real Estate IPOs</Card.Title>
                  <Card.Text>
                  India's real estate IPOs hit new records in 2024, raising Rs 13,500 crore.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
