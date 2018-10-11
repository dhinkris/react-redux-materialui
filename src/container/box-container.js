import React from 'react';
import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js"
import Box from "../component/box.js";
import Typography from "@material-ui/core/Typography"
class BoxCon extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <Box handleClick={this.props.loadColor} color={this.props.color}>
                </Box>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);