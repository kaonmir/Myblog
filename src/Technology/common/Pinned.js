import React, {Component} from 'react';
import './Pinned.css'
class Pinned extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pins: null,
        };
    }
    componentDidMount() {
        fetch("http://localhost:4000/pinned?category=TECHNOLOGY")
        .then(response => response.json())
        .then(json => {
            this.setState({pins: json});
            console.log("state", this.state.pins);
        })
        .catch(error => console.log(error));

    }

    render() {
        const { pins } = this.state;
        return(
            <div className="pinned">
                <div className="pinned_title">Pinned</div>
                <div className="pinned_edit" onClick={this.props.setPinnedDialog}>customize your pinns</div>
                <div className="pinned_line"/>
                <div className="pinned_main">
                    {pins && pins.map((pin, index) => {
                        if(index < 3) return <Theme json={pin} key={pin.id}/>
                    })}
                </div>
            </div>
        )
    }
}

class Theme extends Component {
    render() {
        const json = this.props.json;
        const title = json.title;
        const thumbnailurl = new URL(json.thumbnailurl);
        const url = new URL(json.url);
        return(
            <div className="theme">
                <img className="theme_image" src={thumbnailurl} alt={title}></img>
                <a className="theme_text" href={url}> {title}</a>
            </div>
        )
    }
}

export default Pinned;