import React from "react";
import VillagerContainer from "./VillagerContainer";


function Island(props) {
    
    return(
        <div className="ui container segment" id={`island-${props.id}`}>
            <h1>{props.name} Daily Checklist:</h1>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="glowing_spot" />Found Glowing Spot</h3>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="fossils" />Found Fossils</h3>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="able_shop" />Checked Able Shop</h3>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="nooks_cranny" />Checked Nook's Cranny</h3>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="collect_fruit" />Collected Fruit</h3>
            <h3><input type="checkbox" onChange={props.switchCheckbox} name="shake_trees" />Tree Shook</h3>
            <h3>Villagers talked to:</h3>
            <VillagerContainer island_id={props.id}/>
        </div>
    )
}

export default Island;