import React from 'react';
import { connect } from 'react-redux';
import { FLIP_LIGHT } from './redux/roomSwitchAction';



class RoomSwitch extends React.Component{

    flipLight = () => {
      this.props.dispatch({type: FLIP_LIGHT})
    }

    render(){

        const lightedness = this.props.isLightOn ? 'lit' : 'dark'

        return(
            <div className={`room ${lightedness}`}>
                The Class room is {lightedness}
                <br></br>
                <button onClick={this.flipLight}>Flip</button>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    console.log("aaa", state)
    return{
        isLightOn: state.roomSwitch.isLightOn
    }
}

export default connect(mapStateToProps)(RoomSwitch);