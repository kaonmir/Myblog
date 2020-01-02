import React, { Component } from "react";
import Header from "../Home/common/Header";
import MainImage from "../Home/common/MainImage";
import About from "../Home/common/About";
import Contact from "../Home/common/Contact";

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <MainImage />
                <About />
                <Contact />
            </div>
        )
    }
}

export default Home;