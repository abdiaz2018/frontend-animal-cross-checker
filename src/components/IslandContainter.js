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
    
    displayIslands(){
        return this.state.islands.map(island => <Island island={island} id={island.id} name={island.name} fossil={island.fossil} glowing_spot={island.glowing_spot} nooks_cranny={island.nooks_cranny} able_shop={island.able_shop} shake_trees={island.shake_trees} collect_fruit={island.collect_fruit}/>)
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