import React from "react";
import Navbar from "./Navbar";

class Header extends React.Component {
    
    render() {
        return (
            <div class="ui header">
                <h1>Project</h1>
                <Navbar />
            </div>
        )
    }
}

export default Header;