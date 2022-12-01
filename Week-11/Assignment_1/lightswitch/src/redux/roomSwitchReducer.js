import {FLIP_LIGHT} from "./roomSwitchAction"

const initialState = {
    isLightOn: true
}


const roomSwitchReducer = (state = initialState, action) => {
    switch(action.type){
        case FLIP_LIGHT:
            return{
                isLightOn: !state.isLightOn    
            }
        default:
            return state
    }
}

export default roomSwitchReducer