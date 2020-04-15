import React from "react";

// Shape Creation Code References:
// - Square: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_square
//
function Shape(props) {
    let shapeStyle = {
        backgroundColor: props.colour
    }
    
    /*switch (props.shape) {
        case "square":
            shapeStyle = {...shapeStyle, width: "100px", height: "100px"}
            break;
        default:
            break;
    } */
    console.log("Shape style: " + shapeStyle.backgroundColor);

    return (
        <div className="shapeBox">
            <div className="shape" style={shapeStyle}></div>
        </div>
    );
}

export default Shape;