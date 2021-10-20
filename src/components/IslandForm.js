import React from "react";

class IslandForm extends React.Component {

    state = {
        islandName: "",
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
                </form>
            </div>
        )
    }
}

export default IslandForm;