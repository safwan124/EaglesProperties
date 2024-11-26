import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import "./index.css";

const CampaignPage = () => {
  const [campaign, setCampaign] = useState(null); // Single campaign object
  const apiUrl = "https://api.theeaglesrealty.com"; // Replace with your actual API URL

  useEffect(() => {
    const fetchLatestCampaign = async () => {
      try {
        const response = await axios.get(`${apiUrl}/campaign`);
        setCampaign(response.data.data); // Set the latest campaign
      } catch (error) {
        console.error("Error fetching the latest campaign:", error);
      }
    };

    fetchLatestCampaign();
  }, []);

  if (!campaign) {
    return <p className="text-center">No campaign available.</p>; // No campaign found
  }

  return (
    <Container className="campaign-page">
      <div className="campaign-section mb-5">
        {/* Banner Image */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10}>
            <Image
              src={`${apiUrl}/uploads/${campaign.banner_image}`}
              alt="Campaign Banner"
              className="banner-image"
              fluid
            />
          </Col>
        </Row>

        {/* Campaign Heading */}
        <Row className="justify-content-center text-center mb-3">
          <Col xs={12} md={8}>
            <h1 className="campaign-heading">{campaign.name}</h1>
          </Col>
        </Row>

        {/* Campaign Description */}
        <Row className="justify-content-center text-center mb-4">
          <Col xs={12} md={8}>
            <p className="campaign-description">{campaign.description}</p>
          </Col>
        </Row>

        {/* Image Gallery */}
        <Row className="image-gallery mb-4">
          {campaign.gallery
            ? campaign.gallery.split(",").map((image, index) => (
                <Col xs={6} md={3} key={index} className="gallery-image-col">
                  <Image
                    src={`${apiUrl}/uploads/${image}`}
                    alt={`Gallery ${index + 1}`}
                    fluid
                    className="gallery-image"
                  />
                </Col>
              ))
            : <p>No gallery images available.</p>}
        </Row>

        {/* Location Image */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10}>
            <Image
              src={`${apiUrl}/uploads/${campaign.location_image}`}
              alt="Location"
              fluid
              className="location-image"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CampaignPage;
