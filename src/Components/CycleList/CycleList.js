import React from 'react';
import {connect} from "react-redux";
import { selectCycle } from '../../action';

function CycleList(props) {
    let list_cycles = props.cycles.map((cycle, index) => <li onClick={()=> {
        props.selectCycle(cycle);
    }} key={index}>{cycle.title}</li>);
    // console.log(props);
    return (
        <div>
            <h1>Hi</h1>
            <ul>
                {list_cycles}
            </ul>
        </div>
    )
}



// This is a function that will take our State object to eventually show as Props inside of our Component.
// It doesn't have to be called mapStateToProps but by convention, you usually want this named as mapStateToProps
// This is just mapping this.props (which we will be using in our CycleList component,
// to the state object.
const mapStateToProps = (state) => {
    console.log(state);
    return{
        cycles:state.cycles,
    };
}

// We are passing selectCycle as a second argument to the connect function
// The connect function is going to take that selectCycle Action Creator,
// and pass it in to our Component as a prop
export default connect(mapStateToProps, {selectCycle})(CycleList);


// We have a function that returns a function
// function connect() {
//     return function() {
//         return 'HELLO';
//     }
// }
//When you invoke the function connect:
// connect();
// You won't see anything because all it's doing is just returning a function. 
// So to call the function that get's returned, you put the second set of parentheses like below:
// connect()();
// That's it! Completely valid Javascript code.