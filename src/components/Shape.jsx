import React from "react";

// Shape Creation Code References:
// - Square: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_square

function Shape(props) {
    // Set the shape's colour
    let shapeStyle = {
        backgroundColor: props.colour
    }
    
    // Work out what shape we're going to display
    switch (props.shape) {
        case "square":
            shapeStyle = {...shapeStyle, width: "100px", height: "100px"}
            break;
        case "rectangle":
            shapeStyle = {...shapeStyle, width: "50px", height: "100px"}
            break;
        default:
            shapeStyle = {...shapeStyle, width: "100px", height: "100px", borderRadius: "100px"}
            break;
    }

    return (
        <div className="shapeBox">
            <div className="shape" style={shapeStyle}></div>
            <div className="feedback" style={props.feedback === "|||" ? {visibility: "hidden"} : null}>{props.feedback}</div>
        </div>
    );
}

export default Shape;