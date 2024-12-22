import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Container, Modal, Button, Form, Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import { useForm, ValidationError } from '@formspree/react';

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
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [state, handleSubmit] = useForm("xbllrbqd");


  const handleModalClose = () => setShowModal(false);
  const handleModalOpen = () => setShowModal(true);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setSelectedLocation(locationValue);
    if (locationValue === "Mysore") {
      navigate("/mysore-listings");
    } else if (locationValue === "Bangalore") {
      navigate("/bangalore-listings");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    handleModalClose();
  };

  const handleNavToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNav = () => {
    setIsNavCollapsed(true);
  };

  useEffect(() => {
    closeNav();
    setSelectedLocation("");
  }, [location]);

  const handleModalAndCloseNav = () => {
    handleModalOpen();
    closeNav();
  };

  // Check if the current route is '/campaign'
  const isCampaignPage = location.pathname === "/campaign";

  return (
    <>
      <Navbar expanded={!isNavCollapsed} expand="lg" className="navbar navbar-expand-lg">
        <Container>
          <Link to="/" className="navbar-brand d-flex align-items-center" onClick={closeNav}>
            <img src="/logo.png" alt="logo" className="logo-img" />
            <span className="logo-text">The Eagles</span>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle} />
          <Navbar.Collapse id="basic-navbar-nav">
            {!isCampaignPage && (
              <Nav className="ms-auto">
                <Nav.Item>
                  <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeNav}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/about-us" className={location.pathname === "/about-us" ? "active" : ""} onClick={closeNav}>About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/blogs" className={location.pathname === "/blogs" ? "active" : ""} onClick={closeNav}>Blogs</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Form className="location-select-form">
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
                  </Form>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link onClick={handleModalAndCloseNav}>Book a Site Visit Now</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={closeNav}>Contact Us</Nav.Link>
                </Nav.Item>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Book a Site Visit Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Enter your phone number"
                required
              />
              <ValidationError prefix="Phone" field="phoneNumber" errors={state.errors} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" required>
                <option value="">Select the Category</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Commercial Plot">Commercial Plot</option>
                <option value="Agricultural Land">Agricultural Land</option>
                <option value="Industrial Land">Industrial Land</option>
                <option value="River Side Property">River Side Property</option>
                <option value="Residential House/Villa">Residential House/Villa</option>
                <option value="Apartments">Apartments</option>
              </Form.Select>
              <ValidationError prefix="Category" field="category" errors={state.errors} />
            </Form.Group>
            <Button variant="secondary" type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </Button>
          </Form>
          {state.succeeded && <p>Thanks for submitting the form!</p>}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyNavbar;
