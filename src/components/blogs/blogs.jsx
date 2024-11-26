import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "./blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://api.theeaglesrealty.com/blogs");
        setBlogs(response.data.data); // Assuming your API sends `{ data: rows }`
      } catch (err) {
        setError("Failed to fetch blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-danger py-5">{error}</div>;
  }

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
          {blogs.map((blog) => (
            <Col key={blog.id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="h-100 card-img">
                <Card.Img
                  variant="top"
                  src={blog.image || "/placeholder.jpg"} // Fallback image if none provided
                  alt={`Image for ${blog.headline}`}
                />
                <Card.Body>
                  <Card.Title className='head'>{blog.headline}</Card.Title>
                  <Card.Text>
                    {blog.description}
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
