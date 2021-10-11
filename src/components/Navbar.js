import React from "react";
import {
    Link
} from "react-router-dom"

class Navbar extends React.Component {

    render () {
        return (
            <div class="ui attached stackable menu">
                <div class="ui container">
                    <Link class="item" to="/">Home</Link>
                    <Link class="item" to="/all">All</Link>
                </div>
            </div>
        )
    }
}

export default Navbar;