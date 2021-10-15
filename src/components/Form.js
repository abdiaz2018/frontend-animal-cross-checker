import React from "react";

class Form extends React.Component {


    render () {
        return (
            <div>
                <h3>Create your Island below!</h3>
                <form className="ui form">
                    <input 
                    type="text" 
                    name="islandName"
                    placeholder="Island name..."
                    /><br />
                    <h5>Villager 1</h5>
                    <select>
                    </select>
                    <h5>Villager 2</h5>
                    <select>
                    </select>
                    <h5>Villager 3</h5>
                    <select>
                    </select>
                    <h5>Villager 4</h5>
                    <select>
                    </select>
                    <h5>Villager 5</h5>
                    <select>
                    </select>
                    <h5>Villager 6</h5>
                    <select>
                    </select>
                    <h5>Villager 7</h5>
                    <select>
                    </select>
                    <h5>Villager 8</h5>
                    <select>
                    </select>
                    <h5>Villager 9</h5>
                    <select>
                    </select>
                    <h5>Villager 10</h5>
                    <select>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default Form;