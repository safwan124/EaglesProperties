import React from "react";
import "./category.css";

function Category() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://99realty.in/wp-content/uploads/2023/08/Residential-Land.jpg"  // Replace with actual image URL
          alt="Residential Plot"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Residential Plot</h1>
          <h2>1500 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://kozhikodeproperty.com/en/upload/Kozhikode-Property-1693.jpeg"  // Replace with actual image URL
          alt="Commercial Plot"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Commercial Plot</h1>
          <h2>1200 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuR9-6cKXjERf73BIP7MoIzGcQR6En06m-ag&s"  // Replace with actual image URL
          alt="Agricultural Land"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Agricultural Land</h1>
          <h2>800 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMDPwWLRolcqurJCAGLwrvQnirVY3HZpcsbA&s"  // Replace with actual image URL
          alt="Industrial Land"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Industrial Land</h1>
          <h2>500 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/517590789.jpg?k=fe23bd7fe6a5d6c143b782706bc070710abcdebdaeee325deddae111c82327e5&o=&hp=1"  // Replace with actual image URL
          alt="River Side Property"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>River Side Property</h1>
          <h2>350 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuHduVCtiCcjf4ujQMZR3soYzXTN281x9Ow&s"  // Replace with actual image URL
          alt="Residential House/Villa"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Residential House/Villa</h1>
          <h2>200 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.assethomes.in/wp-content/uploads/2024/03/B-right-night-HQ-compressed-1.png.webp"  // Replace with actual image URL
          alt="Apartments"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>1000 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Category;
