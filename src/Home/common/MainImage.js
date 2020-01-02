import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./MainImage.css";

import literature_image from "../image/literature_section.jpg";
import technology_image from "../image/technology_section.jpg";
import dailylife_image from "../image/dailylife_section.jpg";

class MainImage extends Component {
  render() {
    return (
      <section className="section_whole">
        <div className="section">
          <img src={literature_image} alt="literature"></img>
          <div className="section_inner">
            <Link to="/literature">Literature</Link>
          </div>
        </div>
        <div className="section">
          <img src={technology_image} alt="technology"></img>
          <div className="section_inner">
            <Link to="/technology">Technology</Link>
          </div>
        </div>
        <div className="section">
          <img src={dailylife_image} alt="dailylife"></img>
          <div className="section_inner">
            <Link to="/dailylife">Daily Life</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default MainImage;
