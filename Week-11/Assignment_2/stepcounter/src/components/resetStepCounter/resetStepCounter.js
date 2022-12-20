import React from "react";
import { connect } from "react-redux";
import { RESET_STEPS } from "../../redux/stepCounterAction";

function ResetSteps(props) {
  const resetCount = () => {
    props.dispatch({
      type: RESET_STEPS,
    });
  };

  return (
    <button type="button" onClick={resetCount}>
      Reset steps
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    stepCount: state.stepCounter.stepCount,
  };
};

export default connect(mapStateToProps)(ResetSteps);
