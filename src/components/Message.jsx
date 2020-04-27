import React from "react";

function Message(props) {
    return (
        <div
            className="message"
            style={props.text === "|||"
            ? {
                visibility: "hidden"
            }
            : null}>{props.text}</div>
    );
}
export default Message;