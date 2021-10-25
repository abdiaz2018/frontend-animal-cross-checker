import React from "react";
import VillagerContainer from "./VillagerContainer";


function Island(props) {
    
    return(
        <div className="ui container segment" id={`island-${props.id}`}>
            <h1>{props.name} Daily Checklist:</h1>
            <h3>Found Fossils</h3>
            <h3>Found Glowing Spot</h3>
            <h3>Checked Able Shop</h3>
            <h3>Checked Nook's Cranny</h3>
            <h3>Collected Fruit</h3>
            <h3>Tree Shook</h3>
            <h3>Villagers talked to:</h3>
            {console.log(props.villagers)}
            <VillagerContainer />
        </div>
    )
}

export default Island;