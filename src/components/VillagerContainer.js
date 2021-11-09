import React from "react";
import Villager from "./Villager";



class VillagerContainer extends React.Component {
    
    state = {
        villagersData: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/islands/${this.props.island_id}/villagers`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                villagersData: json
            })
        })
    }
    
    displayVillager(){
        return this.state.villagersData.filter(villager => villager.name !== "").map(villager => <Villager villager={villager} id={villager.id} name={villager.name} />)
    }

    render() {
        return (
            <div>
                {this.displayVillager()}
            </div>
        )
    }
}

export default VillagerContainer;