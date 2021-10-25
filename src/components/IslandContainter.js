import React from "react";
import Island from "./Island";

class IslandContainter extends React.Component {

    state = {
        islands: []
    }
    render() {
        return (
            <div>
                {this.displayIslands()}
            </div>
        )
    }
}

export default IslandContainter;