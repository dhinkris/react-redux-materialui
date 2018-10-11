import React from "react";
import Typography from "@material-ui/core/Typography"
class Box extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="wrapper">

                <div style={{
                    backgroundColor:`${this.props.color}`
                }}
                className="box">
                    <Typography component="h2" variant="display2" gutterBottom>
                        {this.props.color}
                    </Typography>
                    <button onClick={()=>{this.props.handleClick()}}>Change Color</button>
                </div>
            </div>
        )
    }
}

export default Box;