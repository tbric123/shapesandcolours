import React from "react";
import {v4 as uuidv4} from "uuid";

/* Data Imports */
import colours from "../data/colours";
import shapes from "../data/shapes";

/* Utilities */
import * as Utilities from "../utilities/Utilities";

/* Component Imports */
import Header from "./Header";
import Shape from "./Shape";
import Prompt from "./Prompt";
import ColourButton from "./ColourButton";
import InformationBar from "./InformationBar";
import Footer from "./Footer";

function App() {
    let newButtonColours;

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
    const [score,
        setScore] = React.useState(0);
    const [buttonsClickable,
        setClickable] = React.useState(true);

    function checkChoice(newColour) {
        // Set the colour of the shape to what the user specified
        setShapeColour(newColour);

        if (promptValues.colour === newColour) {
            setShapeFeedback("Correct!");
            setScore(score + 1);
        } else {
            setShapeFeedback("Incorrect!");
        }

        // Prevent buttons from being clicked before the next round
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
                setClickable(true);
            } else {
                setPromptValues({colour: "", shape: ""})
            }

        }, 1000);

    }

    function startNewGame() {

    }
    return (
        <div>
            <Header/>
            <div className="componentArea">
                {promptValues.shape !== "" && <Shape
                    colour={shapeColour}
                    shape={promptValues.shape}
                    feedback={shapeFeedback}/>}

            </div>
    
            <Prompt shape={promptValues.shape} colour={promptValues.colour}/>
            
            <InformationBar title="Score" information={score}/>
            <InformationBar title="Round" information={round + "/" + Utilities.MAX_ROUND}/>
            <div className="componentArea">
            {promptValues.shape === "" ? <button>Start Over</button> : buttonColours
                    .map(function (colour) {
                        return <ColourButton
                            key={uuidv4()}
                            onPress={checkChoice}
                            colour={colour}
                            clickable={buttonsClickable}/>;
                    })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;