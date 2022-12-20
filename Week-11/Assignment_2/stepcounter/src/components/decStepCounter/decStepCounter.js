import React from "react";
import { connect } from "react-redux";
import {DECREMENT_STEP} from "../../redux/stepCounterAction";



function DecStepCounter(props) {

  const decrementCount = () => {
    props.dispatch({
      type: DECREMENT_STEP
    })
  }

  return <button type="button" onClick={decrementCount}>Decrement a Step</button>;
}

const mapStateToProps = (state) => {
  return{
    stepCount: state.stepCounter.stepCount
  }
}


export default connect(mapStateToProps)(DecStepCounter);
