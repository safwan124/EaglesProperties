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
              <Card.Title>{property.title}</Card.Title>
              <Card.Text><strong>Location:</strong> {property.location}</Card.Text>
              <Card.Text><strong>Price Per Gunta:</strong> {property.pricePerGunta}</Card.Text>
              <Card.Text><strong>Total Price:</strong> {property.totalPrice}</Card.Text>
              <Card.Text>{property.description}</Card.Text>

              {/* Conditionally show the rest of the details */}
              {showFullDetails && (
                <>
                  {property.extent && <Card.Text><strong>Extent:</strong> {property.extent}</Card.Text>}
                  {property.distance && <Card.Text><strong>Distance:</strong> {property.distance}</Card.Text>}
                  {property.village && <Card.Text><strong>Village:</strong> {property.village}</Card.Text>}
                  {property.road && <Card.Text><strong>Road:</strong> {property.road}</Card.Text>}
                  {property.soil && <Card.Text><strong>Soil:</strong> {property.soil}</Card.Text>}
                  {property.facing && <Card.Text><strong>Facing:</strong> {property.facing}</Card.Text>}
                  {property.plantation && (
                    <Card.Text><strong>Plantation:</strong>
                      <ul>
                        {Object.entries(property.plantation).map(([plant, available]) => (
                          <li key={plant}>
                            {plant}: {available ? "Yes" : "No"}
                          </li>
                        ))}
                      </ul>
                    </Card.Text>
                  )}
                  {property.fencing && <Card.Text><strong>Fencing:</strong> {property.fencing}</Card.Text>}
              {property.borewell && <Card.Text><strong>Borewell:</strong> {property.borewell ? 'Yes' : 'No'}</Card.Text>}
              {property.openWell && <Card.Text><strong>Open Well:</strong> {property.openWell ? 'Yes' : 'No'}</Card.Text>}
              {property.farmhouse && <Card.Text><strong>Farmhouse:</strong> {property.farmhouse ? 'Yes' : 'No'}</Card.Text>}
              {property.pumpHouse && <Card.Text><strong>Pump House:</strong> {property.pumpHouse ? 'Yes' : 'No'}</Card.Text>}
              {property.cowShed && <Card.Text><strong>Cow Shed:</strong> {property.cowShed ? 'Yes' : 'No'}</Card.Text>}
              {property.pricePerGunta && <Card.Text><strong>Price Per Gunta:</strong> {property.pricePerGunta}</Card.Text>}
              {property.totalPrice && <Card.Text><strong>Total Price:</strong> {property.totalPrice}</Card.Text>}
              {property.layoutName && <Card.Text><strong>Layout Name:</strong> {property.layoutName}</Card.Text>}
              {property.siteDimension && <Card.Text><strong>Site Dimension:</strong> {property.siteDimension}</Card.Text>}
              {property.siteFacing && <Card.Text><strong>Site Facing:</strong> {property.siteFacing}</Card.Text>}
              {property.siteNumber && <Card.Text><strong>Site Number:</strong> {property.siteNumber}</Card.Text>}
              {property.roadWidth && <Card.Text><strong>Road Width:</strong> {property.roadWidth}</Card.Text>}
              {property.mudaAllotted && <Card.Text><strong>Muda Allotted:</strong> {property.mudaAllotted ? 'Yes' : 'No'}</Card.Text>}
              {property.mudaApproved && <Card.Text><strong>Muda Approved:</strong> {property.mudaApproved ? 'Yes' : 'No'}</Card.Text>}
              {property.dtcpApproved && <Card.Text><strong>DTCP Approved:</strong> {property.dtcpApproved ? 'Yes' : 'No'}</Card.Text>}
              {property.bhk && <Card.Text><strong>BHK:</strong> {property.bhk}</Card.Text>}
              {property.groundFloor && <Card.Text><strong>Ground Floor:</strong> {property.groundFloor ? 'Yes' : 'No'}</Card.Text>}
              {property.duplex && <Card.Text><strong>Duplex:</strong> {property.duplex ? 'Yes' : 'No'}</Card.Text>}
              {property.buildersFloor && <Card.Text><strong>Builder's Floor:</strong> {property.buildersFloor ? 'Yes' : 'No'}</Card.Text>}
              {property.area && <Card.Text><strong>Area:</strong> {property.area}</Card.Text>}
              {property.mainDoorFacing && <Card.Text><strong>Main Door Facing:</strong> {property.mainDoorFacing}</Card.Text>}
              {property.bedrooms && <Card.Text><strong>Bedrooms:</strong> {property.bedrooms}</Card.Text>}
              {property.attachBathrooms && <Card.Text><strong>Attached Bathrooms:</strong> {property.attachBathrooms}</Card.Text>}
              {property.commonBathroom && <Card.Text><strong>Common Bathroom:</strong> {property.commonBathroom}</Card.Text>}
              {property.poojaRoom && <Card.Text><strong>Pooja Room:</strong> {property.poojaRoom}</Card.Text>}
              {property.totalBuiltUpArea && <Card.Text><strong>Total Built-Up Area:</strong> {property.totalBuiltUpArea}</Card.Text>}
              {property.balconies && <Card.Text><strong>Balconies:</strong> {property.balconies}</Card.Text>}
              {property.totalFloors && <Card.Text><strong>Total Floors:</strong> {property.totalFloors}</Card.Text>}
              {property.semiFurnished && <Card.Text><strong>Semi-Furnished:</strong> {property.semiFurnished ? 'Yes' : 'No'}</Card.Text>}
              {property.fullyFurnished && <Card.Text><strong>Fully Furnished:</strong> {property.fullyFurnished ? 'Yes' : 'No'}</Card.Text>}
              {property.carParking && <Card.Text><strong>Car Parking:</strong> {property.carParking}</Card.Text>}
              <Card.Text>{property.description}</Card.Text>
                </>
              )}

              {/* Button to toggle more details */}
              <Button variant="secondary" onClick={() => setShowFullDetails(!showFullDetails)}>
                {showFullDetails ? "Hide Details" : "View Property Details"}
              </Button>

              {/* Contact Button */}
              <Button className="ms-3" onClick={handleContactModalOpen}>Contact</Button>
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
