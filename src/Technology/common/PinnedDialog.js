//TODO Want to make dimmed background

import React, {Component} from 'react';
import "./PinnedDialog.css"

class PinnedDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: null,
            pinnedArray: [],
        }
        
        fetch("http://localhost:4000/themes?category=TECHNOLOGY")
        .then(response => response.json())
        .then(json => {
            this.setState({themes: json});
            json.map(theme => {if(theme.pinned) this.state.pinnedArray.push(theme.id);});
        })
        .catch(error => console.log(error));
    }

    onChange = e => {
        const value = parseInt(e.target.value);
        if(e.target.checked) this.state.pinnedArray.push(value);
        else this.setState({pinnedArray: this.state.pinnedArray.filter(num => num !== value)});
    }
    submit = e => {        
        fetch("http://localhost:4000/themes/edit?category=TECHNOLOGY", {
            method: 'post',
            headers: {'Content-Type': 'application/json; charset=UTF-8',},
            body: JSON.stringify({pinnedItem: this.state.pinnedArray.toString()})
        }).catch(error => console.log(error));

        this.props.setPinnedDialogDisabled();
        window.location.reload(false);
    }
    render() {
        const {themes} = this.state;
        return(
            <div>
                <div id="whole"></div>
                <div id="pop">
                    <div className="title">
                        Edit pinned items 
                        <div className="cancel" onClick={this.props.setPinnedDialogDisabled}>
                            <i className="fas fa-times cancel"></i>
                        </div>
                    </div>
                    <div className="formItemBox">
                        <div className="itemBox">
                            {themes && themes.map((theme, index) => {
                                return <PinnedItem json={theme} key={theme.id} onChange={this.onChange}/>
                            })}
                        </div>
                        <div className="submit">
                            <button className="submitButton" onClick={this.submit}>Save pins</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class PinnedItem extends Component {
    constructor(props) {
        super(props);
        this.state = {pinned: this.props.json.pinned};
    }
    render() {
        const {id, title} = this.props.json;
        return (
            <div className="pinnedItem">
                <input type="checkbox" name="pinnedItem" value={id} defaultChecked={this.state.pinned} onChange={this.props.onChange}/>
                <label className="label">
                    <strong className="itemlabel"> {title} </strong>
                </label>
            </div>
        )
    }
}

export default PinnedDialog; 