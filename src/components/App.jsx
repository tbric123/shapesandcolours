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
import Footer from "./Footer";

function App() {
    const [shapeColour,
        setShapeColour] = React.useState("white");

    const [promptValues, setPromptValues] = React.useState({colour: getRandomElement(colours), shape: getRandomElement(shapes)});

    function changeColour(newColour) {
        // Set the colour of the shape to what the user specified
        setShapeColour(newColour);

        // Advance to the next shape after 1 second
        setTimeout(function() {
            setPromptValues({colour: getRandomElement(colours), shape: getRandomElement(shapes)});
            setShapeColour("white");
        }, 1000);

    }
    
    return (
        <div>
            <Header/>
            <div className="componentArea">
                <Shape colour={shapeColour} shape={promptValues.shape}/>
            </div>

            <Prompt shape={promptValues.shape} colour={promptValues.colour}/>

            <div className="componentArea">
                {colours.map(function(colour) {
                    return <ColourButton key={uuidv4()} onPress={changeColour} colour={colour}/>;
                })}
            </div>

            <Footer/>
        </div>
    );
}

export default App;