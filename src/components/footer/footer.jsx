import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
    return (
        <footer className="footer text-white py-4">
            <Container>
                <Row>
                    <Col md={6} xs={12} className="mb-3">
                        <h5>The Eagles</h5>
                        <h4>Mysore</h4>
                        <p>#41/36, Mothikhana Building's Old Santhepet Road, Mysore - 570024</p>
                        {/* <p>&copy; {new Date().getFullYear()} Deal IT Solutions. All Rights Reserved.</p> */}
                        <h4>Bangalore</h4>
                        <p># 82, 4th Floor, Pipeline, 11th Cross Malleshwaram, Bangalore - 560003</p>
                        <p>&copy; {new Date().getFullYear()} Deal IT Solutions. All Rights Reserved.</p>
                    </Col>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Contact Us</h5>
                        <h4>Mysore</h4>
                        <p>Phone: +91 9980557991</p>
                        <p>Email: eaglesproperty991@gmail.com</p>
                        <h4>Bangalore</h4>
                        <p>Phone: +91 9845034692</p>
                        <p>Email: eagles.bangalore991@gmail.com</p>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a href="https://www.instagram.com/eagle_properties?igsh=bnd5c2NsNHV2dXpk" className="text-white" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />Instagram
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.linkedin.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> LinkedIn
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.facebook.com/profile.php?id=61567251331546&mibextid=ZbWKwL" className="text-white" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" /> FaceBook
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
