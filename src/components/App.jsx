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
import Message from "./Message";
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
            setShapeFeedback("CORRECT!");
            setScore(score + 1);
        } else {
            setShapeFeedback("INCORRECT!");
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
                setPromptValues({colour: "", shape: ""});
                setButtonColours([]);
            }

        }, 1000);

    }

    function startNewGame() {
        const newButtonColours = Utilities.getRandomSet(colours, Utilities.BUTTON_COUNT);
        setButtonColours(newButtonColours);
        setPromptValues({
            shape: Utilities.getRandomElement(shapes, true),
            colour: Utilities.getRandomElement(newButtonColours, true)
        });

        setShapeColour(Utilities.STARTING_COLOUR);
        setShapeFeedback(Utilities.BLANK_FEEDBACK);
        setRound(1);
        setScore(0);
        setClickable(true);
    }

    return (
        <div>

            <Header/>
            <div className="componentArea">
                <div className="shapeBox">
                    {promptValues.shape !== ""
                        ? <Shape colour={shapeColour} shape={promptValues.shape}/>
                        : <div>
                            <button className="startOverButton" onClick={startNewGame}>Start Over</button><br/></div>}
                </div>

                <Message text={shapeFeedback}/>
                <InformationBar title="Score" information={score}/>
                <InformationBar title="Round" information={round + "/" + Utilities.MAX_ROUND}/>
            </div>

            <Prompt shape={promptValues.shape} colour={promptValues.colour}/>

            <div className="componentArea">
                {buttonColours.length !== 0 && buttonColours.map(function (colour) {
                    let buttonNumber = 0;
                    return <ColourButton
                        key={uuidv4()}
                        onPress={checkChoice}
                        colour={colour}
                        clickable={buttonsClickable}
                        number={buttonNumber + 1}/>

                })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;