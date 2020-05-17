import React from "react";

function Prompt(props) {
    let promptText;
    if (props.shape === "" && props.colour === "") {
        promptText = "Well done!";
    } else {
        promptText = "Colour the " + props.shape + " " + props.colour.toUpperCase() + ".";
    }
    return(<h2 className="prompt">{promptText}</h2>);
}

export default Prompt;