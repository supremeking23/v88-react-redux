import React from 'react';
import { connect } from 'react-redux';

function CycleDetail(props) {
    if(!props.cycle){
        return <div>Select a Cycle</div>;
    }
    return (
        <div>
            <h1>Title: {props.cycle.title}</h1>
            <p><b>Description</b>: {props.cycle.description}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cycle: state.selectedCycle
    };
}

export default connect(mapStateToProps)(CycleDetail);