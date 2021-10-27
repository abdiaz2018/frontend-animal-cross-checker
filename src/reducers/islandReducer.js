const islandReducer = (state = { islands: []}, action) => {
    switch(action.type){
        case "GET_ISLANDS":
            return {...state, islands: action.payload}
        case "ADD_ISLAND":
            return { ...state, islands: [...state.islands, action.payload] }
        default:
            return state
    }
}

export default islandReducer