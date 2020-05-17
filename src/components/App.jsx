// TODO: Level select 1) Pick the right colour 2) Work
// out the shape and choose the right colour
// TODO: Animations Right, wrong, game over

/* npm modules */
import React from "react";
import {v4 as uuidv4} from "uuid";
import rightSound from "../sounds/right.wav";
import wrongSound from "../sounds/wrong.wav";

/* Data Imports */
import {colours, colourMap} from "../data/colours";
import shapes from "../data/shapes";

/* Utilities */
import * as Utilities from "../utilities/Utilities";

/* Component Imports */
import Header from "./Header";
import Shape from "./Shape";
import Prompt from "./Prompt";
import Selection from "./Selection";
import Message from "./Message";
import ColourButton from "./ColourButton";
import Footer from "./Footer";
import GameSelectionMenu from "./GameSelectionMenu";

function App() {
    let newButtonColours;

    const [selectedColour,
        setSelectedColour] = React.useState(Utilities.STARTING_COLOUR);
    const [shapeColour,
        setShapeColour] = React.useState(Utilities.STARTING_COLOUR);
    const [buttonColours,
        setButtonColours] = React.useState(Utilities.getRandomSet(colours, Utilities.BUTTON_COUNT));
    const [shapeFeedback,
        setShapeFeedback] = React.useState(Utilities.BLANK_FEEDBACK);
    const [promptValues,
        setPromptValues] = React.useState({
        colour: Utilities.getRandomElement(buttonColours, true),
        shape: Utilities.getRandomElement(shapes, true)
    });
    const [round,
        setRound] = React.useState(1);
    const [clickable,
        setClickable] = React.useState(true);

    const [atGameSelect,
        setGameSelectState] = React.useState(true);

    function colourShape() {
        // Don't do anything unless a colour is selected.
        if (selectedColour !== Utilities.STARTING_COLOUR) {
            setShapeColour(selectedColour);
            if (colourMap[promptValues.colour] === selectedColour) {
                // Give feedback
                playFeedbackSound(true);
                setShapeFeedback("Yay!");

                // Prevent buttons and shape from being clicked before the next round
                setClickable(false);

                // Advance to the next round after 1 second
                setTimeout(function () {
                    setShapeFeedback(Utilities.BLANK_FEEDBACK);
                    if (round < Utilities.MAX_ROUND) {
                        setRound(round + 1);
                        setShapeColour(Utilities.STARTING_COLOUR);
                        newButtonColours = Utilities.getRandomSet(colours, Utilities.BUTTON_COUNT);
                        setButtonColours(newButtonColours);
                        setPromptValues({
                            colour: Utilities.getRandomElement(newButtonColours, true),
                            shape: Utilities.getRandomElement(shapes, true)
                        });
                        setSelectedColour(Utilities.STARTING_COLOUR);
                        setClickable(true);
                    } else {
                        setPromptValues({colour: "", shape: ""});
                        setButtonColours([]);
                        playFeedbackSound(true);
                    }

                }, 1500);
            } else {
                playFeedbackSound(false);
                setShapeFeedback("Whoops, try again...");
            }
        }
    }

    function selectColour(newColour) {
        // Set the colour of the shape to what the user specified
        setSelectedColour(newColour);
    }

    function playFeedbackSound(right) {
        let sound;
        if (right) {
            sound = new Audio(rightSound);
        } else {
            sound = new Audio(wrongSound);
        }
        sound.play();
    }

    function backToMenu() {
        setGameSelectState(true);
    }

    function startNewGame() {
        setGameSelectState(false);
        const newButtonColours = Utilities.getRandomSet(colours, Utilities.BUTTON_COUNT);
        setButtonColours(newButtonColours);
        setPromptValues({
            shape: Utilities.getRandomElement(shapes, true),
            colour: Utilities.getRandomElement(newButtonColours, true)
        });

        setSelectedColour(Utilities.STARTING_COLOUR);
        setShapeColour(Utilities.STARTING_COLOUR);
        setShapeFeedback(Utilities.BLANK_FEEDBACK);
        setClickable(true);
        setRound(1);
    }

    // Determine whether or not the game is over
    function gameIsOver() {
        return promptValues.shape === "" && promptValues.colour === "";
    }

    return (atGameSelect
        ? <GameSelectionMenu gameStart={startNewGame}/>
        : <div>
            <Header/>
            <div className="componentArea">
                {gameIsOver()
                    ? <img src={require("../images/wellDone.png")} alt="Well done!"/> // require() is needed to import images into code
                    : <div>
                        <Shape colour={shapeColour} shape={promptValues.shape} onPress={colourShape} clickable={clickable}/>
                        <Message text={shapeFeedback}/>
                    </div>
}

            </div>

            <Prompt shape={promptValues.shape} colour={promptValues.colour}/>

            <div className="componentArea">{gameIsOver()
                    ? <div>
                      <button className="bigButton startOverButton" onClick={startNewGame}>Play Again</button>
                      <button class="bigButton backToMenuButton" onClick={backToMenu}>Play Another Game</button>
                      </div>
                    : <Selection colour={selectedColour}/>}</div>

            <div className="componentArea">
                {buttonColours.length !== 0 && buttonColours.map(function (colour) {
                    let buttonNumber = 0;
                    return <ColourButton
                        key={uuidv4()}
                        onPress={selectColour}
                        colour={colourMap[colour]}
                        clickable={clickable}
                        number={buttonNumber + 1}/>

                })}
            </div>

            <Footer/>
        </div>);
}

export default App;