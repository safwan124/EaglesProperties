import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer text-white py-4">
            <Container>
                <Row>
                    <Col md={6} xs={12} className="mb-3">
                        <h5>The Eagles Realty</h5>
                        <p>#41/36, Mothikhana Building Old Santhepet, Mysore - 570024</p>
                        <p>&copy; {new Date().getFullYear()} Deal IT Solutions. All Rights Reserved.</p>
                    </Col>
                    <Col md={3} xs={12} className="mb-3">
                        <h5>Contact Us</h5>
                        <p>Email: contact@theeaglesrealty.com</p>
                        <p>Phone: +91 9980557991</p>
                    </Col>
                    <Col md={3} xs={12}>
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a href="https://www.instagram.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i> Instagram
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.youtube.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-youtube"></i> YouTube
                                </a>
                            </li>
                            <li className="ms-3">
                                <a href="https://www.twitter.com" className="text-white" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter"></i> X
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
