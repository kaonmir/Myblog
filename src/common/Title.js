import React, { Component } from "react";

class Title extends Component {
  render() {
    const title = {
      textDecoration: "none",
      fontSize: "40px",
      fontWeight: "bold",
      fontFamily: "cursive",
      letterSpacing: "3px",
      height: "auto",
      marginTop: "20px",
      marginBottom: "25px"
    };
    const title_special = {
      color: "orange",
      letter_spacing: "1px"
    };
    return (
      <div style={title}>
        <span style={title_special}>&bull; </span>
        {this.props.title}
        <span style={title_special}> &bull;</span>
      </div>
    );
  }
}

export default Title;
