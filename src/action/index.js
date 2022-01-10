// Here's our Action Creator function
// we used Named Export instead of Export Default this time
// because we are going to create more action creators in this file.
// Named Exports require curly braces to be imported which you can see in the CycleList.js file below.
export const selectCycle = (cycle) => {
    // It simply returns an Action
    return {
        type: 'CYCLE_SELECTED',
        payload: cycle
    };
};

export const like = (current_value) => {
    return {
        type: "LIKE",
        payload: current_value += 1,
    }
}

export const dislike = (current_value) => {
    return {
        type: "DISLIKE",
        payload: current_value -= 1,
    }
}