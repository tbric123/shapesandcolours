import React from "react";
import Header from "./Header";

function GameSelectionMenu(props) {
    return (
        <div>
            <Header/>
            <div className="componentArea">
                <button onClick={() => props.gameStart()}>One Shape</button><br />
                <button>Two Shapes</button><br />
                <button>Guess the Shape and Colour</button><br />
                <p>Description text here...</p>
            </div>

        </div>
    );
}

export default GameSelectionMenu;