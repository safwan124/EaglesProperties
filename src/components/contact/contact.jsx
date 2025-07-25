import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFolder, faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css';

const Contact = () => {
  return (
    <div className='contact-section'>
      <div className='background-image'></div>
      <div className="content">
        <Row>
          <Col md={4} xs={12} className="p-5 mt-5">
            <h5>Mysore</h5>
            <p><FontAwesomeIcon icon={faPhone} size="1x" />&nbsp;+91 9999000</p>
            <p><FontAwesomeIcon icon={faSquareEnvelope} size="1x" /> &nbsp;eagles@gmail.com</p>
            <p># 553/2, <br />Mysore - 570019</p>
          </Col>
          <Col md={4} xs={12} className="p-5 mt-5">                        
            <h5>Bangalore</h5>
            <p><FontAwesomeIcon icon={faPhone} size="1x" />&nbsp;+91 956565515</p>
            <p><FontAwesomeIcon icon={faSquareEnvelope} size="1x" /> &nbsp;eagles.bangalore@gmail.com</p>
            <p># 82, 4th Floor, <br />Bangalore - 560003</p>
          </Col>
          <Col md={4} xs={12}>
            <ul className="list-unstyled d-flex flex-row mt-5 px-5">
              <li className="ms-3">
                <a href="https://www.instagram.com/eagle_properties?igsh=bnd5c2NsNHV2dXpk" className="no-underline" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" /><br/>Instagram
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.linkedin.com" className="no-underline" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" /> <br/>LinkedIn
                </a>
              </li>
              <li className="ms-3">
                <a href="https://www.facebook.com/profile.php?id=61567251331546&mibextid=ZbWKwL" className="no-underline" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" /> <br/>Facebook
                </a>
              </li>
            </ul>
            <p className='px-5 mx-3'>www.theeaglesrealty.com</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
