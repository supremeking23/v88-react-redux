import React,{useState} from 'react';
import {connect} from "react-redux";
import {like, dislike} from "../../action";


function LikeDislike(props) {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>Like Count:{props.count_value}</h1>
            <button type="button" onClick={()=> props.addLike(props.count_value)}>Like</button>
            <button type="button" onClick={()=> props.removeLike(props.count_value)}>Dislike</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        count_value: state.likeDislike
    }
}

// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return{
        addLike:(current_value) => {
            dispatch(like(current_value));
        },
        removeLike:(current_value) => {
            dispatch(dislike(current_value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeDislike);