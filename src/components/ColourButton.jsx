import React from "react";

function ColourButton(props) {
    const buttonColour = {
        backgroundColor: props.colour
    }

    return (
        <button
            className="colourButton"
            style={buttonColour}
            onClick={() => {
                if (props.clickable) {
                    props.onPress(props.colour);
                }
        }}
        
        ></button>
    );
}

export default ColourButton;