import React from "react";

class IslandForm extends React.Component {


    render () {
        return (
            <div>
                <h3>Create your Island below!</h3>
                <form className="ui form" onSubmit={this.handleSubmit}>
                </form>
            </div>
        )
    }
}

export default IslandForm;