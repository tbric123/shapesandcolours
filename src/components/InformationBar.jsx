import React from "react";

function InformationBar(props) {
    return (
        <div className="informationBar">
            <p>{props.title}: {props.information}</p>
        </div>
    );
}

export default InformationBar;