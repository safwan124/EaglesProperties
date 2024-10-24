import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Modal, Button, Form, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

const locations = ["Mysore", "Bangalore"];

function MyNavbar() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    category: '',
  });
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true); // Track navbar collapse state
  const navigate = useNavigate();
  const location = useLocation(); // This helps detect route changes

  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedLocation === "Mysore") {
      navigate("/mysore-listings");
    } else if (selectedLocation === "Bangalore") {
      navigate("/bangalore-listings");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    handleModalClose();
  };

  // Function to handle navbar toggle state
  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  // Function to close navbar when a link is clicked
  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  // Use `useEffect` to listen to route changes
  useEffect(() => {
    // Close the navbar menu when URL changes
    closeNav();
  }, [location]); // Runs every time the location changes (i.e., after a route change)

  return (
    <>
      <Navbar expand="lg" className="navbar navbar-expand-lg">
        <Container>
          <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeNav}>
            <img src="/logo.png" alt="logo" className="logo-img" />
            <span>The Eagles</span>
          </Link>

          {/* Toggle for hamburger */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
          <Navbar.Collapse id="basic-navbar-nav" className={isNavCollapsed ? "" : "show"}>
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={closeNav}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about-us" onClick={closeNav}>About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/blogs" onClick={closeNav}>Blogs</Nav.Link>
              </Nav.Item>

              {/* Location Selector */}
              <Nav.Item>
                <Form onSubmit={handleSubmit} className="search-form d-flex">
                  <Form.Select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="location-select"
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </Form.Select>
                  <Button variant="danger" type="submit" className="search-btn">
                    <FontAwesomeIcon icon={faSearch} color="white" />
                  </Button>
                </Form>
              </Nav.Item>

              {/* Contact Us opens modal */}
              <Nav.Item>
                <Nav.Link style={{ backgroundColor: 'yellow', color: 'black' }} onClick={handleModalOpen}>Book-Now</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact" onClick={closeNav}>Contact-Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                placeholder="Select the Category"
                required
              >
                <option value="">Select the Category</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Commercial Plot">Commercial Plot</option>
                <option value="Agricultural Land">Agricultural Land</option>
                <option value="Industrial Land">Industrial Land</option>
                <option value="River Side Property">River Side Property</option>
                <option value="Residential House/Villa">Residential House/Villa</option>
                <option value="Apartments">Apartments</option>
              </Form.Select>
            </Form.Group>
            <Button variant="danger" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyNavbar;
