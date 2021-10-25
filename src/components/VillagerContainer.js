import React from "react";
import Villager from "./Villager";



class VillagerContainer extends React.Component {
    
    state = {
        villagers: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/islands/${this.props.island_id}/villagers`)
        .then(res => res.json())
        .then(json => {
            this.setState({
                villagers: json
            })
        })
    }

    displayVillager(){
        return this.state.villagers.map(villager => <Villager villager={villager} id={villager.id} name={villager.name} talked_to={villager.talked_to}/>)
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