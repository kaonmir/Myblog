import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import header_image from "../image/technology_section_horizontal.jpg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {login: false};
    }

    changeLogin = e => {
        this.setState({login: !this.state.login});
    }
    render() {
        const technology_logo = {
            backgroundImage: `url(${header_image})`
        };
        return (
            <div className="header" style={technology_logo}>
                <Link to="/technology" className="header_name">Technology</Link>
                <div className="login" onClick={this.changeLogin}>Sign in to be a god</div>
            </div>
        );
    };
};

export default Header;