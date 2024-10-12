import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Modal, Button, Form } from "react-bootstrap"; // Import Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome for icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Use an envelope icon
import "./navbar.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  // Handle modal close
  const handleModalClose = () => setShowModal(false);
  // Handle modal open
  const handleModalOpen = () => setShowModal(true);

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Do something with the form data, such as sending to the server
    handleModalClose(); // Close the modal after submission
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <Container>
          {/* Logo and Brand */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="/logo.png" alt="logo" className="logo-img" />
            <span>The Eagles Realty</span>
          </Link>

          {/* Navbar items */}
          <div className="d-flex align-items-end ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  className="btn btn-primary nav-link contact-us-btn"
                  onClick={handleModalOpen}
                >
                  <span className="contact-text">Contact-Us</span>
                  <span className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </nav>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
