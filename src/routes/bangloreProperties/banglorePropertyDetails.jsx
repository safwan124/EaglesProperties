import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel, Modal, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BangalorePropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://api.theeaglesrealty.com/properties')
      .then(response => {
        const propertiesWithParsedImages = response.data.data.map(property => ({
          ...property,
          images: JSON.parse(property.images) // Assuming images are stored as JSON strings
        }));
        
        const fetchedProperty = propertiesWithParsedImages.find((p) => p.id === parseInt(id));
        setProperty(fetchedProperty);
      })
      .catch(error => {
        console.error("There was an error fetching the properties!", error);
      });
  }, [id]);

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
              <img
                className="d-block w-100"
                src={`https://api.theeaglesrealty.com${image.startsWith('/uploads') ? '' : '/uploads'}${image || '/noimg.png'}`}
                alt={property.title}
              />
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
                    {property.riversidebackwater && <li><strong>River Side Land/Back Water Land-</strong> {property.riversidebackwater}</li>}
                    {property.bhks && <li><strong>BHK - </strong> {property.bhks}</li>}
                    {property.bhk && <li><strong>BHK - </strong> {property.bhk}</li>}
                    {property.location && <li><strong>Location -</strong> {property.location}</li>}
                    {property.distance && <li><strong>Distance -</strong> {property.distance}</li>}
                    {property.village && <li><strong>Village -</strong> {property.village}</li>}
                    {property.road && <li><strong>Road -</strong> {property.road}</li>}
                    {property.soil && <li><strong>Soil -</strong> {property.soil}</li>}
                    {property.facing && <li><strong>Facing -</strong> {property.facing}</li>}
                    {property.Balconies && <li><strong>Balconies -</strong> {property.Balconies}</li>}
                    {property.Totalnumberofflats && <li><strong>Total Number of Flats -</strong> {property.Totalnumberofflats}</li>}
                    {property.ageoftheapartment && <li><strong>Age of the Apartment -</strong> {property.ageoftheapartment}</li>}
                    {property.Flatonfloornumber && <li><strong>Flat on floor number -</strong> {property.Flatonfloornumber}</li>}
                    {property.Flatsonthatfloor && <li><strong>Flats on that floor -</strong> {property.Flatsonthatfloor}</li>}
                    {property.layoutName && <li><strong>Layout Name -</strong> {property.layoutName}</li>}
                    {property.groundduplex && <li><strong>Duplex House- </strong> {property.groundduplex}</li>}
                    {property.area && <li><strong>Area -</strong> {property.area}</li>}
                    {property.siteDimension && <li><strong>Site Dimension -</strong> {property.siteDimension}</li>}
                    {property.totalArea && <li><strong>Total Area - </strong> {property.totalArea}</li>}
                    {property.siteFacing && <li><strong>Site Facing - </strong> {property.siteFacing}</li>}
                    {property.mainDoorFacing && <li><strong>Main Door Facing - </strong> {property.mainDoorFacing}</li>}
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
                    {property.bedrooms && <li><strong>Bedrooms - </strong> {property.bedrooms}</li>}
                    {property.attachBathrooms && <li><strong>Attached Bathrooms - </strong> {property.attachBathrooms}</li>}
                    {property.commonBathroom && <li><strong>Common Bathroom - </strong> {property.commonBathroom}</li>}
                    {property.poojaRoom && <li><strong>Pooja Room - </strong> {property.poojaRoom}</li>}
                    {property.totalBuiltUpArea && <li><strong>Total Built-Up Area - </strong> {property.totalBuiltUpArea}</li>}
                    {property.balconies && <li><strong>Balconies - </strong> {property.balconies}</li>}
                    {property.totalFloors && <li><strong>Total Floors - </strong> {property.totalFloors}</li>}
                    {property.semiFurnished && <li><strong>Semi-Furnished - </strong> {property.semiFurnished}</li>}
                    {property.fullyFurnished && <li><strong>Fully Furnished - </strong> {property.fullyFurnished}</li>}
                    {property.carParking && <li><strong>Car Parking - </strong> {property.carParking}</li>}
                    {property.flooring && <li><strong>Flooring - </strong> {property.flooring}</li>}
                    {property.SemiFurnished && <li><strong>SemiFurnished - </strong> {property.SemiFurnished}</li>}
                    {property.Builtuparea && <li><strong>Built up area - </strong> {property.Builtuparea}</li>}
                    {property.Carpetarea && <li><strong>Carpet area - </strong> {property.Carpetarea}</li>}
                    {property.Superarea && <li><strong>Super area - </strong> {property.Superarea}</li>}
                    {property.Lift && <li><strong>Lift - </strong> {property.Lift}</li>}
                  </ul>
                </Col>

                <Col xs={12} md={4}>
                  <ul>
                    {property.fencing && <li><strong>Fencing -</strong> {property.fencing}</li>}
                    {property.roadWidth && <li><strong>Road Width - </strong> {property.roadWidth}</li>}
                    {(property.category === 'Agricultural Land' || property.category === 'River Side Property') && (
                      <>
                        {property.borewell && <li><strong>Borewell - </strong> {property.borewell}</li>}
                        {property.openWell && <li><strong>Open Well - </strong> {property.openWell}</li>}
                        {property.farmhouse && <li><strong>Farmhouse - </strong> {property.farmhouse}</li>}
                        {property.pumpHouse && <li><strong>Pump House - </strong> {property.pumpHouse}</li>}
                        {property.cowShed && <li><strong>Cow Shed - </strong> {property.cowShed}</li>}
                      </>
                    )}
                    {(property.category === 'Residential Plot' || property.category === 'Commercial Plot') && (
                      <>
                        {property.mudaAllotted && <li><strong>Muda Allotted - </strong> {property.mudaAllotted}</li>}
                        {property.approvalStatus && <li><strong>Approval Status - </strong> {property.approvalStatus}</li>}
                        {property.security && <li><strong>Security - </strong> {property.security}</li>}
                      </>
                    )}
                  </ul>
                </Col>
              </Row>
              <Button variant="secondary" onClick={handleContactModalOpen}>Request Quote</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showContactModal} onHide={handleContactModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Quote</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default BangalorePropertyDetail;
