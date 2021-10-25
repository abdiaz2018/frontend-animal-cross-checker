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
            this.setState({
                islands: json
            })
        })
    }

    displayIslands(){
        return this.state.islands.map(island => <Island switchCheckbox={this.switchCheckbox} id={island.id} name={island.name} fossils={island.fossils} glowing_spot={island.glowing_spot} nooks_cranny={island.nooks_cranny} able_shop={island.able_shop} shake_trees={island.shake_trees} collect_fruit={island.collect_fruit}/>)
    }
    
    switchCheckbox = (e) => {
        console.log(e.target.name)
        
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