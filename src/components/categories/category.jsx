import React from "react";
import "./category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faTractor, faIndustry, faWater, faHouse, faCity } from "@fortawesome/free-solid-svg-icons";

function Category() {
  return (
    <div className="container pList">
      <div className="pListItem">
        <FontAwesomeIcon icon={faHome} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Residential Plot</h1>
          <h2>1500 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faBuilding} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Commercial Plot</h1>
          <h2>1200 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faTractor} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Agricultural Land</h1>
          <h2>800 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faIndustry} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Industrial Land</h1>
          <h2>500 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faWater} color="red" size="3x" />
        <div className="pListTitles">
          <h1>River Side Property</h1>
          <h2>350 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faHouse} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Residential House/Villa</h1>
          <h2>200 properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <FontAwesomeIcon icon={faCity} color="red" size="3x" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>1000 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Category;
