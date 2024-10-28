import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { mysorePropertiesData } from '../../lib/dummyData';
import './mysoreProperties.css';
import { useNavigate } from 'react-router-dom';

function MysoreProperties() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected property
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track selected category
  const navigate = useNavigate();

  // Handle property search navigation
  const handleSearch = (id) => {
    navigate(`/mysore-listings/${id}`);
  };

  // Handle opening the modal for a specific property
  const handleModalOpen = (property) => {
    setSelectedProduct(property); // Set the selected property
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

  // Filter properties based on the selected category
  const filteredProperties = mysorePropertiesData.filter((property) => 
    selectedCategory === 'All' || property.category === selectedCategory
  );

  // Category options
  const categories = [
    'All',
    'Apartments',
    'Residential Plot',
    'Commercial Plot',
    'Agricultural Land',
    'Industrial Land',
    'River Side Property',
    'Residential House/Villa'
  ];  

  return (
    <Container className="mysoreProperties">
      <Row className="my-5">
        <Col>
          <h1 className="text-center">Mysore Properties</h1>
          <p className="text-center">Explore available properties in Mysore for purchase.</p>
        </Col>
      </Row>

      {/* Category Navigation */}
      <Row className="mb-4">
        <Col className="text-center">
          <div className="category-nav">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'secondary' : 'outline-secondary'}
                className="m-1"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      <Row>
        {filteredProperties.map((property) => (
          <Col md={12} key={property.id}>
            <Card className="mb-4 property-card shadow-sm">
              <Row>
                {/* Property Image */}
                <Col md={4}>
                  <Card.Img variant="top" src={property.images[0]} className="img-fluid" />
                </Col>

                {/* Property Details */}
                <Col md={5}>
                  <Card.Body>
                    <Card.Title className="property-title">{property.title}</Card.Title>
                    {property.extent && <Card.Text><strong>Carpet Area:</strong> {property.extent}</Card.Text>}
                    {property.location && <Card.Text><strong>Location:</strong> {property.location}</Card.Text>}
                    {property.distance && <Card.Text><strong>Status:</strong> {property.distance}</Card.Text>}
                    {property.siteDimension && <Card.Text><strong>Transaction:</strong> {property.siteDimension}</Card.Text>}
                    {property.totalPrice && <Card.Text><strong>Price per Sqft:</strong> ₹{property.totalPrice} per sqft</Card.Text>}
                  </Card.Body>
                </Col>

                {/* Action Buttons */}
                <Col md={3} className="text-center d-flex flex-column justify-content-center mt-5">
                  <Card.Body>
                    <Card.Text className="fs-4 fw-bold">₹{property.totalPrice}</Card.Text>
                    <Button variant="primary" className="mb-2 w-100" onClick={() => handleModalOpen(property)}>
                      Contact
                    </Button>
                    <Button variant="secondary" className="w-100" onClick={() => handleSearch(property.id)}>
                      View Property
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Get a Quote */}
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
              <Button className="danger" type="submit">
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
