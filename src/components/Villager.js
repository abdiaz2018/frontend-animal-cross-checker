import React from "react";

function Villager(props) {

    return (    
            <h3 id={`villager-${props.id}`}>
                <input id={props.id} name={`${props.name}`} type="checkbox" onChange={props.switchVillager} />{props.name}
            </h3>
    )
}

export default Villager;