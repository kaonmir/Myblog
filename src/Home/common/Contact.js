import React, { Component } from "react";
import "./Contact.css";
import Title from "./Title";
import phone from "../image/phone.png";
import location from "../image/location.png";
import mail from "../image/mail.png";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Title title="Contact" />
        <div className="contact_section">
          <div className="contact_fragment">
            <img
              className="contact_image image_1"
              src={phone}
              alt="phone"
            ></img>
            <p className="contact_text">
              010-4095-7558
              <br />
              sonjeff (KakaoTalk)
            </p>
          </div>
          <div className="contact_fragment">
            <img className="contact_image " src={location} alt="loaction"></img>
            <p className="contact_text">
              Maybe <span className="contact_text_in">in</span> ROKA
              <br />
              Maybe <span className="contact_text_in">in</span> School
              <br />
              Maybe <span className="contact_text_in">in</span> Home
            </p>
          </div>
          <div className="contact_fragment">
            <img className="contact_image" src={mail} alt="mail"></img>
            <p className="contact_text">
              sonjeff<span className="contact_text_at">@</span>naver.com
              <br />
              thswpvm<span className="contact_text_at">@</span>cau.ac.kr
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
