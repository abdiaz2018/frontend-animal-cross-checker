import React from "react";

class IslandForm extends React.Component {

    state = {
        islandName: "",
        villager1: "",
        villager2: "",
        villager3: "",
        villager4: "",
        villager5: "",
        villager6: "",
        villager7: "",
        villager8: "",
        villager9: "",
        villager10: ""
    }

    handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value 

        this.setState({
            [name]: value,
        }, () => console.log(this.state))
    }

    render () {
        return (
            <div>
                <h3>Create your Island below!</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="islandName"
                    placeholder="Island name..."
                    onChange={this.handleFormChange}
                    value={this.state.islandName}
                    />
                    <label>First Villager</label>
                    <input 
                    type="text" 
                    name="villager1"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager1}
                    />
                    <label>Second Villager</label>
                    <input 
                    type="text" 
                    name="villager2"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager2}
                    />
                    <label>Third Villger</label>
                    <input 
                    type="text" 
                    name="villager3"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager3}
                    />
                    <label>Fourth Villager</label>
                    <input 
                    type="text" 
                    name="villager4"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager4}
                    />
                    <label>Fifth Villager</label>
                    <input 
                    type="text" 
                    name="villager5"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager5}
                    />
                    <label>Sixth Villager</label>
                    <input 
                    type="text" 
                    name="villager6"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager6}
                    />
                    <label>Seventh Villager</label>
                    <input 
                    type="text" 
                    name="villager7"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager7}
                    />
                    <label>Eighth Villager</label>
                    <input 
                    type="text" 
                    name="villager8"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager8}
                    />
                    <label>Ninth Villager</label>
                    <input 
                    type="text" 
                    name="villager9"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager9}
                    />
                    <label>Last Villager</label>
                    <input 
                    type="text" 
                    name="villager10"
                    placeholder="Villager name..."
                    onChange={this.handleFormChange}
                    value={this.state.villager10}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default IslandForm;