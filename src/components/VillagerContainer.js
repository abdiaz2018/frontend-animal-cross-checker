import React from "react";



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


    render() {
        return (
            <div>
                {this.displayVillager()}
            </div>
        )
    }
}

export default VillagerContainer;