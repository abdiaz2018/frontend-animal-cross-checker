import React from "react";
import VillagerContainer from "./VillagerContainer";


function Island(props) {
    
    return(
        <div className="ui container segment" id={`island-${props.id}`}>
            <h1>{props.name} Daily Checklist:</h1>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="glowing_spot" checked={props.glowing_spot}/>Found Glowing Spot</h3>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="fossils" checked={props.fossils}/>Found Fossils</h3>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="able_shop" checked={props.able_shop}/>Checked Able Shop</h3>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="nooks_cranny" checked={props.nooks_cranny}/>Checked Nook's Cranny</h3>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="collect_fruit" checked={props.collect_fruit}/>Collected Fruit</h3>
            <h3><input type="checkbox" onClick={props.switchCheckbox} name="shake_trees" checked={props.shake_trees}/>Tree Shook</h3>
            <h3>Villagers talked to:</h3>
            <VillagerContainer island_id={props.id}/>
        </div>
    )
}

export default Island;