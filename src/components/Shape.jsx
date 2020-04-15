import React from "react";

// Shape Creation Code References:
// - Square: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_square
//
function Shape(props) {
    const backgroundColour = {
        backgroundColor: props.colour
    }
    
    return (
        <div className="shapeBox">
            <div className="shape" style={backgroundColour}></div>
        </div>
    );
}

export default Shape;