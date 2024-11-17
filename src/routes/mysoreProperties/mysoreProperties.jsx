import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add this import for API requests
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './mysoreProperties.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faHome, faWarehouse, faIndustry, faWater, faHouseUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function MysoreProperties() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [properties, setProperties] = useState([]); // State to store properties data
  const navigate = useNavigate();

  // Fetch all properties and filter for Mysore on the client-side
  useEffect(() => {
    axios.get('https://api.theeaglesrealty.com/properties')
      .then(response => {
        const propertiesWithParsedImages = response.data.data
          .map(property => ({
            ...property,
            images: JSON.parse(property.images)
          }))
          .filter(property => property.city === 'Mysore'); // Filter properties for Mysore
        setProperties(propertiesWithParsedImages);
      })
      .catch(error => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  const handleSearch = (id) => {
    navigate(`/mysore-listings/${id}`);
  };

  const handleModalOpen = (property) => {
    setSelectedProduct(property);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
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
    handleModalClose();
  };

  // Filter properties based on the selected category
  const filteredProperties = properties.filter((property) =>
    selectedCategory === 'All' || property.category === selectedCategory
  );

  const categories = [
    { name: 'All', icon: faMapMarkerAlt },
    { name: 'Apartments', icon: faBuilding },
    { name: 'Residential Plot', icon: faHome },
    { name: 'Commercial Plot', icon: faWarehouse },
    { name: 'Agricultural Land', icon: faHouseUser },
    { name: 'Industrial Land', icon: faIndustry },
    { name: 'River Side Property', icon: faWater },
    { name: 'Residential House/Villa', icon: faHome },
  ];

  return (
    <Container className="mysoreProperties">
      <Row className="my-5 banhead py-5">
        <Col>
          <h1 className="text-center">Mysore Properties</h1>
          {/* <p className="text-center">Explore available properties in Mysore for purchase.</p> */}
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="text-center">
          <div className="category-nav">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={category.name === selectedCategory ? 'secondary' : 'outline-secondary'}
                className="m-1"
                onClick={() => setSelectedCategory(category.name)}
              >
                <FontAwesomeIcon icon={category.icon} size="1x" className="me-2" />
                {category.name}
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
                <Col md={4}>
                <Card.Img variant="top" src={`https://api.theeaglesrealty.com${
                    property.images[0] && property.images[0].startsWith('/uploads') ? '' : '/uploads'
                  }${property.images[0] || '/noimg.png'}`}
                  className="img-fluid" />
                </Col>
                <Col md={5}>
                  <Card.Body>
                    <Card.Title className="property-title mb-3">{property.title}</Card.Title>
                    <ul>
                      {property.extent && (
                        <li>
                          <Card.Text className='mb-3'><strong>Extent -</strong> {property.extent}</Card.Text>
                        </li>
                      )}
                      {property.location && (
                        <li>
                          <Card.Text><strong>Location:</strong> {property.location}</Card.Text>
                        </li>
                      )}
                      {property.duplexground && (
                        <li>
                          <Card.Text className='mt-3'><strong>Duplex/Ground -</strong> {property.duplexground}</Card.Text>
                        </li>
                      )}
                      {property.siteDimension && (
                        <li>
                          <Card.Text className='mt-3'><strong>Site Dimension -</strong> {property.siteDimension}</Card.Text>
                        </li>
                      )}
                    </ul>
                  </Card.Body>
                </Col>
                <Col md={3} className="text-center d-flex flex-column justify-content-center mt-5">
                  <Card.Body>
                    <Button variant="primary" className="mb-2 w-100 contact-btn" onClick={() => handleModalOpen(property)}>
                      Contact
                    </Button>
                    <Button variant="secondary" className="w-100" onClick={() => handleSearch(property.id)}>
                      View Property Details
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
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
