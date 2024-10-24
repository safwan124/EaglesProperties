import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '../footer/footer';
import "./blogs.css";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Blogs() {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-light py-5">
        <Container>
          <h1 className="display-4 text-center">Latest Real-Estate News</h1>
          <p className="lead text-center text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
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
                  src="https://etimg.etb2bimg.com/thumb/114309870.cms?width=400&height=300"
                  alt={`Card image ${card}`}
                />
                <Card.Body>
                  <Card.Title>Heading</Card.Title>
                  <Card.Text>
                    This is a media card. You can use this section to describe the content.
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
