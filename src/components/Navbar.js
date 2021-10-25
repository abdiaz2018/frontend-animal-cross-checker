import React from "react";
import {
    Link
} from "react-router-dom"

class Navbar extends React.Component {

    render () {
        return (
            <div>
                | <Link to="/">Home</Link>
                | <Link to ="/islands/new">New Island </Link>
                |
                <Link to="/islands"> My Islands</Link>|
            </div>
        )
    }
}

export default Navbar;