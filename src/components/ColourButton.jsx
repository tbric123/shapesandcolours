import React from "react";

function ColourButton(props) {
    const buttonColour = {
        backgroundColor: props.colour
    }

    return (
        <button className="colourButton" style={buttonColour} onClick={() => {props.onPress(props.colour)}}></button>
    );
}

export default ColourButton;