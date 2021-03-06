import React from "react";

// Shape Creation Code References:
// - Square:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_square

function Shape(props) {
    // Set the shape's colour
    let shapeStyle = {
        backgroundColor: props.colour,
        border: "5px solid",
        marginTop: "10px"
    }

    // Work out what shape we're going to display
    switch (props.shape) {
        case "square":
            shapeStyle = {
                ...shapeStyle,
                width: "200px",
                height: "200px"
            }
            break;
        case "rectangle":
            shapeStyle = {
                ...shapeStyle,
                width: "100px",
                height: "200px"
            }
            break;
        default:
            shapeStyle = {
                ...shapeStyle,
                width: "200px",
                height: "200px",
                borderRadius: "100px"
            }
            break;
    }

    return (
        <div className="shape" style={shapeStyle} onClick={() => {if (props.clickable) {props.onPress()}}}></div>
    );
}

export default Shape;