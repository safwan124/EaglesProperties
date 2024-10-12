import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { mysorePropertiesData } from '../../lib/dummyData';
import './mysoreProperties.css';
import { useNavigate } from 'react-router-dom';

function MysoreProperties() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // To store the selected product for the modal
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();
  const handleSearch = (id) => {
    navigate(`/mysore-listings/${id}`);
  };

  // Handle modal open for a specific product
  const handleModalOpen = (product) => {
    setSelectedProduct(product); // Set the selected product
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null); // Clear selected product when closing modal
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Quote Request:', formData);
    handleModalClose(); // Close modal after form submit
  };

  return (
    <Container className="mysoreProperties">
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Mysore Properties</h1>
          <p className="text-center">Explore available properties in Mysore for purchase.</p>
        </Col>
      </Row>
      <Row>
        {mysorePropertiesData.map((property) => (
          <Col md={12} lg={6} key={property.id}>
            <Card className="mb-4 property-card shadow-sm">
              <Row>
                <Col md={4}>
                  <Card.Img variant="top" src={property.img} className="img-fluid" />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title className="property-title">{property.title}</Card.Title>
                    {property.extent && <Card.Text><strong>Extent:</strong> {property.extent}</Card.Text>}
                    {property.location && <Card.Text><strong>Location:</strong> {property.location}</Card.Text>}
                    {property.distance && <Card.Text><strong>Distance:</strong> {property.distance}</Card.Text>}
                    {property.siteDimension && <Card.Text><strong>Site Dimension:</strong> {property.siteDimension}</Card.Text>}
                    {property.totalPrice && <Card.Text><strong>Total Price:</strong> {property.totalPrice}</Card.Text>}
                  </Card.Body>
                </Col>
              </Row>
              <Card.Footer className="text-center">
                <Button variant="primary" className="w-50" onClick={() => handleModalOpen(property)}>
                  Get a Quote
                </Button>
                <Button variant="secondary" className="w-50" onClick={() => handleSearch(property.id)}>
                  View Property
                </Button>

              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Get a Quote for {selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Product</Form.Label>
                <Form.Control type="text" value={selectedProduct.title} readOnly />
              </Form.Group>
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
              <Button className="primary" type="submit">
                Submit Quote Request
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
}

export default MysoreProperties;
