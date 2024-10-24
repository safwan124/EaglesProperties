import About from "../../components/about/about";
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
              <source src="https://www.dlf.in/video/banner-videoss.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* PiP container for the featured property */}
            <div className="pip-container" onClick={handleClick}>
              <div className="featured-property">
                <img
                  src="/properties/agricultural_land.jpg" // Replace with your featured property image
                  alt="Featured Property"
                  className="featured-property-image"
                />
                {/* <div className="featured-property-details">
                  <h2>Featured Property</h2>
                  <p>Luxurious 3BHK Apartment</p>
                  <p>Price: ₹75 Lakhs</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <About />
        <h3 className="subhead text-center mb-5 mt-5">Categories</h3>
        <Category />
      </>

  );
}

export default HomePage;
