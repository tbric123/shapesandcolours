// TODO: Level select
// 1) Pick the right colour
// 2) Two shapes to colour
// 3) Work out the shape and choose the right colour

// TODO: Sound effects
// Right, wrong, game over

// TODO: Animations
// Right, wrong, game over
import React from "react";
import {v4 as uuidv4} from "uuid";

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
import InformationBar from "./InformationBar";
import Footer from "./Footer";

function App() {
    let newButtonColours;

    const [selectedColour, setSelectedColour] = React.useState(Utilities.STARTING_COLOUR);
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
    const [buttonsClickable,
        setClickable] = React.useState(true);

    function colourShape() {
      // Don't do anything unless a colour is selected.
      if (selectedColour !== Utilities.STARTING_COLOUR) {
          console.log("Colour has been selected");
          setShapeColour(selectedColour);
      } else {
          console.log("Colour not selected");
      }
    }
    function selectColour(newColour) {
        // Set the colour of the shape to what the user specified
        setSelectedColour(newColour);

        /*
        if (promptValues.colour === newColour) {
            setShapeFeedback("CORRECT!");
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
        */
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
        setClickable(true);
    }

    return (
        <div>

            <Header/>
            <div className="componentArea">
                <Shape colour={shapeColour} shape="square" onPress={colourShape}/>
                <Message text={shapeFeedback}/>
            </div>

            <Prompt shape={promptValues.shape} colour={promptValues.colour}/>
            <Selection colour={selectedColour} />

            <div className="componentArea">
                {buttonColours.length !== 0 && buttonColours.map(function (colour) {
                    let buttonNumber = 0;
                    return <ColourButton
                        key={uuidv4()}
                        onPress={selectColour}
                        colour={colourMap[colour]}
                        clickable={buttonsClickable}
                        number={buttonNumber + 1}/>

                })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;