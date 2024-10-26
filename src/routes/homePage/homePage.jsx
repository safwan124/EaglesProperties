import React from 'react';
import HomeAbout from "../../components/homeAbout/homeAbout";
import Category from "../../components/categories/category";
import "./homePage.css";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/bangalore-listings/1'); // Navigates to the property detail page with id 1
  };

  return (
    <>
      <div className="homePage mb-5">
        <div className="video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* Use HomeAbout with handleClick as a prop */}
      <HomeAbout handleClick={handleClick} />
      <h3 className="subhead text-center mb-5 mt-5">Categories</h3>
      <Category />
    </>
  );
}

export default HomePage;
