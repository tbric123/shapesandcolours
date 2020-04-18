import React from "react";

function Prompt(props) {
    let promptText;
    if (props.shape === "" && props.colour === "") {
        promptText = "Game finished.";
    } else {
        promptText = "Colour the " + props.shape + " " + props.colour + ".";
    }
    return(<h2 className="prompt">{promptText}</h2>);
}

export default Prompt;