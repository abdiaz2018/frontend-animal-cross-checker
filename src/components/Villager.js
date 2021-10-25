import React from "react";

function Villager(props) {

    return (    
            <h3 id={`villager-${props.id}`}>
                <input type="checkbox" value={props.talked_to}/>{props.name}
            </h3>
    )
}

export default Villager;