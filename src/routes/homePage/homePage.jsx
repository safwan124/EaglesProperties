import Category from "../../components/categories/category";
import Footer from "../../components/footer/footer";
import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <>
    <div className="homePage mb-5">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200+</h1>
              <h2>Customers</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
    <h3 className="subhead text-center mb-5">Categories</h3>
    <Category />
    <Footer />
    </>
  );
}

export default HomePage;