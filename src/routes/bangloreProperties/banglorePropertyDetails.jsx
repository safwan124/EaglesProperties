import { useParams, useNavigate } from "react-router-dom";
import { bangalorePropertiesData } from "../../lib/dummyData";
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Carousel, Modal, Form } from 'react-bootstrap';

function BangalorePropertyDetail() {
  const { id } = useParams();
  const property = bangalorePropertiesData.find((p) => p.id === parseInt(id));
  const [showFullDetails, setShowFullDetails] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  if (!property) {
    return <div>Property not found</div>;
  }

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
    setShowContactModal(false);
  };

  const handleContactModalOpen = () => setShowContactModal(true);
  const handleContactModalClose = () => setShowContactModal(false);

  return (
    <Container>
      <Row className="my-5">
        <Col md={12}>
          <Button variant="secondary" onClick={() => navigate(-1)} className="mb-4">Back</Button>
          <Card className="mb-4 shadow-sm">
            <Carousel>
              {property.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={image} alt={property.title} />
                </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
            <Card.Title className="mb-5">{property.title}</Card.Title>
              <Row>
  <Col xs={12} md={4}>
    <ul>
      {property.extent && <li><strong>Extent -</strong> {property.extent}</li>}
      {property.planlandplantation && <li><strong>Plain land/Plantation -</strong> {property.planlandplantation}</li>}
      {property.riversidebackwater && <li><strong>River Side/Back Water -</strong> {property.riversidebackwater}</li>}
      {property.location && <li><strong>Location -</strong> {property.location}</li>}
      {property.distance && <li><strong>Distance -</strong> {property.distance}</li>}
      {property.village && <li><strong>Village -</strong> {property.village}</li>}
      {property.road && <li><strong>Road -</strong> {property.road}</li>}
      {property.soil && <li><strong>Soil -</strong> {property.soil}</li>}
      {property.facing && <li><strong>Facing -</strong> {property.facing}</li>}
    </ul>
  </Col>

  <Col xs={12} md={4}>
    <ul>
      {property.plantation && (
        <li><strong className="plantation">Plantation -</strong>
          <ul>
            {Object.entries(property.plantation).map(([plant, available]) => (
              <li key={plant}>
                {plant} - {available ? "Yes" : "No"}
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  </Col>

  <Col xs={12} md={4}>
    <ul>
      {property.fencing && <li><strong>Fencing -</strong> {property.fencing}</li>}
      <li><strong>Borewell - </strong> {property.borewell ? 'Yes' : 'No'}</li>
      <li><strong>Open Well - </strong> {property.openWell ? 'Yes' : 'No'}</li>
      <li><strong>Farmhouse - </strong> {property.farmhouse ? 'Yes' : 'No'}</li>
      <li><strong>Pump House - </strong> {property.pumpHouse ? 'Yes' : 'No'}</li>
      <li><strong>Cow Shed - </strong> {property.cowShed ? 'Yes' : 'No'}</li>
      {property.pricePerGunta && <li><strong>Price Per Gunta - </strong> {property.pricePerGunta}</li>}
      {property.layoutName && <li><strong>Layout Name -</strong> {property.layoutName}</li>}
      {property.siteDimension && <li><strong>Site Dimension -</strong> {property.siteDimension}</li>}
      {property.area && <li><strong>Area -</strong> {property.area}</li>}
      {property.totalPrice && <li><strong>Total Price - </strong> {property.totalPrice}</li>}
      {property.siteFacing && <li><strong>Site Facing - </strong> {property.siteFacing}</li>}
      {property.siteNumber && <li><strong>Site Number - </strong> {property.siteNumber}</li>}
      {property.roadWidth && <li><strong>Road Width - </strong> {property.roadWidth}</li>}
      {property.mudaAllotted && <li><strong>Muda Allotted - </strong> {property.mudaAllotted ? 'Yes' : 'No'}</li>}
      {property.mudaApproved && <li><strong>Muda Approved - </strong> {property.mudaApproved ? 'Yes' : 'No'}</li>}
      {property.dtcpApproved && <li><strong>DTCP Approved - </strong> {property.dtcpApproved ? 'Yes' : 'No'}</li>}
      {property.bhk && <li><strong>BHK - </strong> {property.bhk}</li>}
      {property.groundFloor && <li><strong>Ground Floor - </strong> {property.groundFloor ? 'Yes' : 'No'}</li>}
      {property.duplex && <li><strong>Duplex - </strong> {property.duplex ? 'Yes' : 'No'}</li>}
      {property.buildersFloor && <li><strong>Builder's Floor - </strong> {property.buildersFloor ? 'Yes' : 'No'}</li>}
      {property.mainDoorFacing && <li><strong>Main Door Facing - </strong> {property.mainDoorFacing}</li>}
      {property.bedrooms && <li><strong>Bedrooms - </strong> {property.bedrooms}</li>}
      {property.attachBathrooms && <li><strong>Attached Bathrooms - </strong> {property.attachBathrooms}</li>}
      {property.commonBathroom && <li><strong>Common Bathroom - </strong> {property.commonBathroom}</li>}
      {property.poojaRoom && <li><strong>Pooja Room - </strong> {property.poojaRoom}</li>}
      {property.totalBuiltUpArea && <li><strong>Total Built-Up Area - </strong> {property.totalBuiltUpArea}</li>}
      {property.balconies && <li><strong>Balconies - </strong> {property.balconies}</li>}
      {property.totalFloors && <li><strong>Total Floors - </strong> {property.totalFloors}</li>}
      {property.semiFurnished && <li><strong>Semi-Furnished - </strong> {property.semiFurnished ? 'Yes' : 'No'}</li>}
      {property.fullyFurnished && <li><strong>Fully Furnished - </strong> {property.fullyFurnished ? 'Yes' : 'No'}</li>}
      {property.carParking && <li><strong>Car Parking - </strong> {property.carParking}</li>}
      {property.flooring && <li><strong>Flooring - </strong> {property.flooring}</li>}
      {property.garden && <li><strong>Garden - </strong> {property.garden ? 'Yes' : 'No'}</li>}
      {property.patios && <li><strong>Patios - </strong> {property.patios}</li>}
    </ul>
  </Col>
</Row>

              {/* Button to toggle more details */}
              {/* <Button variant="secondary" onClick={() => setShowFullDetails(!showFullDetails)}>
                {showFullDetails ? "Hide Details" : "View Property Details"}
              </Button> */}

              {/* Contact Button */}
              <Button className="ms-3 contact-btn" onClick={handleContactModalOpen}>Contact</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Modal */}
      <Modal show={showContactModal} onHide={handleContactModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact for {property.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product</Form.Label>
              <Form.Control type="text" value={property.title} readOnly />
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
    </Container>
  );
}

export default BangalorePropertyDetail;
