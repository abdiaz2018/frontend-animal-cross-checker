const url = "http://localhost:3000/islands"

export const addIsland = (island) => ({ type: "ADD_ISLAND", payload: island});

export const getIslands = (islands) => ({type: "GET_ISLANDS", payload: islands});
