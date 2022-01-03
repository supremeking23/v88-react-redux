import { combineReducers } from 'redux';
// Here's the function that simply returns all the redux cycles
const cyclesReducer = () => {
    return [
        {    title: 'Action Creator', 
             description: 'A function that is going to create or return a plain javascript object'
        },
        {
            title: 'Action',
            description: 'To describe some change that we want to make to the data inside of our application'
        },
        {
            title: 'dispatch',
            description: 'It is going to make copies of the Action object and pass it off to a bunch of different places inside of our application.'
        },
        {
            title: 'Reducer',
            description: 'Its going to process that Action and then make some changes to the data '
            
        },
        {
            title: 'State',
            description: 'All the information gets consolidated inside of the State object'
        }
    ];
};
// The function that will take in an Action,
const selectedCycleReducer = (selectedCycle = null, action) => {
    // process that Action,
    if (action.type === 'CYCLE_SELECTED') {
        // and make some changes to the data and return it so that it can be used in some other location.
        return action.payload;
    }
    return selectedCycle;
};
// we added a new key pair to combineReducers selectedCycle: selectedCycleReducer
export default combineReducers({
    cycles: cyclesReducer,
    selectedCycle: selectedCycleReducer
});