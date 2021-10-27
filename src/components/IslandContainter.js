import React from "react";
import Island from "./Island";
import {connect} from "react-redux"
import {fetchIslands} from "../actions/islandActions"

class IslandContainter extends React.Component {

    state = {
        islands: []
    }

    componentDidMount(){
        this.props.fetchIslands()        
    }

    displayIslands(){
        return this.props.islands.map(island => <Island switchCheckbox={this.switchCheckbox} id={island.id} name={island.name} fossils={island.fossils} glowing_spot={island.glowing_spot} nooks_cranny={island.nooks_cranny} able_shop={island.able_shop} shake_trees={island.shake_trees} collect_fruit={island.collect_fruit}/>)
    }
    

    render() {
        return (
            <div>
                {this.displayIslands()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        islands: state.islands 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIslands: () => dispatch(fetchIslands())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IslandContainter);