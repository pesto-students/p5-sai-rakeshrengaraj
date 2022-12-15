import { INCREMENT_STEP,DECREMENT_STEP,RESET_STEPS } from "./stepCounterAction";

const initialState = {
    stepCount: 0
}

const stepCounterReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT_STEP:
            return{
                stepCount: state.stepCount +  1
            }
        case DECREMENT_STEP:
            return{
                stepCount: state.stepCount <= 0 ? 0 : state.stepCount - 1
            }    
        case RESET_STEPS:
            return{
                stepCount: 0
            }    
        default:
            return state    
    }
}

export default stepCounterReducer;