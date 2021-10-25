import React from "react";



class VillagerContainer extends React.Component {
    
    state = {
        villagers: []
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