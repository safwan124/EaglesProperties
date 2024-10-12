import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./searchBar.css"; // Import custom CSS

const types = ["buy", "rent"];
const cities = ["Mysore", "Bangalore"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "Mysore",
  });

  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle type switch
  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  // Handle location change
  const handleLocationChange = (e) => {
    setQuery((prev) => ({ ...prev, location: e.target.value }));
  };

  // Submit handler to navigate based on location
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.location === "Mysore") {
      navigate("/mysore-listings");
    } else if (query.location === "Bangalore") {
      navigate("/bangalore-listings");
    }
  };

  return (
    <Container className="searchBar mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <div className="d-flex justify-content-between">
            {types.map((type) => (
              <Button
                key={type}
                variant={query.type === type ? "dark" : "light"}
                className={`type-button ${query.type === type ? 'dark' : ''}`}
                onClick={() => switchType(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          <Form onSubmit={handleSubmit} className="search-form d-flex mt-3">
            <Form.Select
              value={query.location}
              onChange={handleLocationChange}
              className="location-select"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
            <Button variant="warning" type="submit" className="search-btn">
              <img src="/search.png" alt="search" className="search-icon" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
