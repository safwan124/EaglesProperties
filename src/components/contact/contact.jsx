import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <Container className="contact-container">
        <Row>
          <Col md={4} xs={12} className="mb-3 mt-5">
              <h5>Mysore</h5>
              <p>+91 9980557991</p>
              <p>eaglesproperty991@gmail.com</p>
              <p>#41/36, Mothikhana Building's Old Santhepet Road, Mysore - 570024</p>
          </Col>
          <Col md={4} xs={12} className="mb-3 mt-5">                        
              <h5>Bangalore</h5>
              <p>+91 9845034692</p>
              <p>eagles.bangalore991@gmail.com</p>
              <p># 82, 4th Floor, Pipeline, 11th Cross Malleshwaram, Bangalore - 560003</p>
          </Col>
          <Col md={4} xs={12}>
              <ul className="list-unstyled d-flex mt-5">
                  <li className="ms-3">
                      <a href="https://www.instagram.com/eagle_properties?igsh=bnd5c2NsNHV2dXpk" className="text-dark" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} size="2x" /><br/>Instagram
                      </a>
                  </li>
                  <li className="ms-3">
                      <a href="https://www.linkedin.com" className="text-dark" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> <br/>LinkedIn
                      </a>
                  </li>
                  <li className="ms-3">
                      <a href="https://www.facebook.com/profile.php?id=61567251331546&mibextid=ZbWKwL" className="text-dark" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebook} size="2x" /> <br/>Facebook
                      </a>
                  </li>
              </ul>
          </Col>
        </Row>
      </Container>
      
      {/* Footer-like Section */}
      <div className="footer-section">
        <Container fluid>
            <img src='/foo3.jpg'/>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
