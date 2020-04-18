import React from "react";
import {v4 as uuidv4} from "uuid";

/* Data Imports */
import colours from "../data/colours";
import shapes from "../data/shapes";

/* Utilities */
import {getRandomElement} from "../utilities/Utilities";

/* Component Imports */
import Header from "./Header";
import Shape from "./Shape";
import Prompt from "./Prompt";
import ColourButton from "./ColourButton";
import InformationBar from "./InformationBar";
import Footer from "./Footer";

function App() {
    const [shapeColour,
        setShapeColour] = React.useState("white");
    const [shapeFeedback, setShapeFeedback] = React.useState("");
    const [promptValues, setPromptValues] = React.useState({colour: getRandomElement(colours), shape: getRandomElement(shapes)});
    const [round, setRound] = React.useState(1);
    const [score, setScore] = React.useState(0);

    const MAX_ROUND = 3;

    function checkChoice(newColour) {
        // Set the colour of the shape to what the user specified
        setShapeColour(newColour);
        
        if (promptValues.colour === newColour) {
          setShapeFeedback("Correct!");
          setScore(score + 1);
        } else {
          setShapeFeedback("Incorrect!");
        }

        // Advance to the next round after 1 second
        setTimeout(function() {
            setPromptValues({colour: getRandomElement(colours), shape: getRandomElement(shapes)});
            setShapeColour("white");
            setShapeFeedback("");
        }, 1000);

    }
    
    return (
        <div>
            <Header/>
            <div className="componentArea">
                <Shape colour={shapeColour} shape={promptValues.shape} feedback={shapeFeedback}/>
            </div>

            <Prompt shape={promptValues.shape} colour={promptValues.colour} />
            <InformationBar title="Score" information={score}/>
            <div className="componentArea">
                {colours.map(function(colour) {
                    return <ColourButton key={uuidv4()} onPress={checkChoice} colour={colour}/>;
                })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;