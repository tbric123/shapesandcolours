import React from "react";
import Header from "./Header";
import {menuButtons} from "../data/menuButtons";

function GameSelectionMenu(props) {
 
    const [descriptionText, setDescriptionText] = React.useState("");

    function showButtonDescription(event) {
        const buttonID = event.target.id;
        setDescriptionText(menuButtons[buttonID]);
    }

    function clearButtonDescription() {
        setDescriptionText("");
    }

    return (
        <div>
            <Header/>
            <div className="componentArea">
                <button id="option1" className="bigButton" onMouseEnter={showButtonDescription} onMouseLeave={clearButtonDescription} onClick={() => props.gameStart()}>Guess the Colour</button><br />
                <button id="option2" className="bigButton" onMouseEnter={showButtonDescription} onMouseLeave={clearButtonDescription} onClick={() => props.gameStart()}>Guess the Shape and Colour</button><br />
                <p>{descriptionText}</p>
            </div>

        </div>
    );
}

export default GameSelectionMenu;