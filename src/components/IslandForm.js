import React from "react";

class IslandForm extends React.Component {

    state = {
        islandName: "",
            villagers: [
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false},
                {villager: "", talked_to: false}
            ]
        }

    handleVillagerChange = (index) => (e) => {
        // const name = e.target.name
        // const value = e.target.value 

        // this.setState({
        //     [name]: value,
        // }, () => console.log(this.state))
        let villagers = [...this.state.villagers]
        villagers[index].villager = e.target.value
        this.setState({villagers}, () => {console.log(this.state)})
    }

    handleIslandChange= (e) => {
        const name = e.target.name
        const value = e.target.value 

        this.setState({
            [name]: value,
        }, () => console.log(this.state))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // const island = this.state
        //const island = {...this.state, fossils: false, glowing_spot: false, able_shop: false, nooks_cranny: false, collect_fruit: false, shake_trees: false}
        // console.log(island)

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        fetch("http://localhost:3000/islands", configObj)
        .then(res => res.json())
        .then(json => {
            debugger 
        })
    }


    render () {
        const villagers = this.state.villagers.map((villager, index) => {
            return(
                <div>
                    <label>Villager Number {index + 1}</label>
                    <input 
                    type="text" 
                    name="villager"
                    placeholder="Villager name..."
                    onChange={this.handleVillagerChange(index)}
                    />
                </div>
            )
        })
        return (
            <div>
                <h3>Create your Island below!</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="islandName"
                    placeholder="Island name..."
                    onChange={this.handleIslandChange}
                    />
                    {villagers}
                    {/* <label>First Villager</label>
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
                    /> */}
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default IslandForm;