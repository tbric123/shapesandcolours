import React from "react";
import {v4 as uuidv4} from "uuid";

/* Data Imports */
import colours from "../data/colours";

/* Component Imports */
import Header from "./Header";
import Shape from "./Shape";
import Prompt from "./Prompt";
import ColourButton from "./ColourButton";
import Footer from "./Footer";

function App() {
    const [shapeColour,
        setShapeColour] = React.useState("white");

    const [promptColour, setPromptColour] = React.useState(generateRandomColour());
    generateRandomColour();

    function generateRandomColour() {
        const colourIndex = Math.floor(Math.random() * colours.length);
        return colours[colourIndex];
    }
    
    function changeColour(newColour) {
        setShapeColour(newColour);
    }
    
    return (
        <div>
            <Header/>
            <div className="componentArea">
                <Shape colour={shapeColour}/>
            </div>

            <Prompt shape="square" colour={promptColour}/>

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