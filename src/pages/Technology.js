import React, { Component } from "react";
import Header from "../Technology/common/Header";
import Pinned from "../Technology/common/Pinned";
import PinnedDialog from "../Technology/common/PinnedDialog"

class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pinned: false,
            login: false
        };
    }
    setPinnedDialog = () => this.setState({pinned: true});
    setPinnedDialogDisabled = () => this.setState({pinned: false});
    setLoginDialog = () => this.setState({login: true});
    setLoginDialogDisabled = () => this.setState({login: false});
    render() {
        const { pinned, login } = this.state;
        return(
            <div>
                <Header />
                <Pinned setPinnedDialog={this.setPinnedDialog}/>
                {pinned? <PinnedDialog setPinnedDialogDisabled={this.setPinnedDialogDisabled}/>: null}
                {/* {login? <LoginDialog setLoginDialogDisabled={this.setLoginDialogDisabled}/>: null} */}
            </div>
        )
    }
}

export default Technology;