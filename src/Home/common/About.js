import React, { Component } from "react";
import "./About.css";
import Title from "./Title";
import profile_image from "../image/profile.jpg";
import program_logo_image from "../image/program_logo.png";

class About extends Component {
  render() {
    const program_logo = {
      backgroundImage: `url(${program_logo_image})`
    };
    return (
      <div id="about">
        <Title title="About" />
        <div className="about_section">
          <div className="profile">
            <div className="profile_crop">
              <img
                className="profile_image"
                src={profile_image}
                alt="profile_image"
              ></img>
            </div>
            <div className="profile_description">Son Sunghun</div>
          </div>
          <div className="description">
            <div className="description_text">
              <p>
                Studying Computer Science & Engineering
                <br /> in ChungAng University
              </p>
              <p>
                I will be a developer with philosophical mindset
                <br /> I will learn anything if it looks interesting
              </p>
              <p className="text_small">Learning these languages by myself</p>
            </div>
            <div className="description_language">
              <div className="language_section section_web">
                <div className="language_section_title">{"<WEB>"}</div>
                <div className="language_images">
                  <div style={program_logo} id="language_images_html5"></div>
                  <div style={program_logo} id="language_images_css3"></div>
                  <div
                    style={program_logo}
                    id="language_images_javascript"
                  ></div>
                  <div style={program_logo} id="language_images_react"></div>
                </div>
              </div>
              <div className="language_section section_server">
                <div className="language_section_title">{"<SERVER>"}</div>
                <div className="language_images">
                  <div style={program_logo} id="language_images_nodejs"></div>
                  <div style={program_logo} id="language_images_nginx"></div>
                  {/* <div style={program_logo} id="language_images_mysql"></div> */}
                </div>
              </div>
              <div className="language_section section_other">
                <div className="language_section_title">{"<OTHER>"}</div>
                <div className="language_images">
                  <div style={program_logo} id="language_images_python"></div>
                  <div style={program_logo} id="language_images_java"></div>
                  <div style={program_logo} id="language_images_kotlin"></div>
                  <div style={program_logo} id="language_images_c"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
