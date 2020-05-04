import React from "react";

function Selection(props) {
    let boxStyle = {
        backgroundColor: props.colour,
        width: "100px",
        height: "100px",
        border: "1px solid black",
        margin: "auto"
    };

    let textStyle = {
        textAlign: "center"
    };

    return (
        <div>
            <p style={textStyle}>Chosen:</p>
            <div style={boxStyle}></div>
        </div>

    );
}

export default Selection;