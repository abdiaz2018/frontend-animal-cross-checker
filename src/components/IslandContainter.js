import React from "react";
import Island from "./Island";

class IslandContainter extends React.Component {

    state = {
        islands: []
    }
    componentDidMount(){
        // const url = "http://localhost:3000/islands"
        fetch("http://localhost:3000/islands")
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.setState({
                islands: json
            })
        })
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