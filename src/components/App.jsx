import React from "react";
import Header from "./Header";
import Shape from "./Shape";
import Prompt from "./Prompt";
import ColourButton from "./ColourButton";
import Footer from "./Footer";

function App() {
    const [shapeColour,
        setShapeColour] = React.useState("white");

    function changeColour(newColour) {
        setShapeColour(newColour);
    }

    return (
        <div>
            <Header/>
            <div className="componentArea">
                <Shape colour={shapeColour}/>
            </div>

            <Prompt shape="square" colour="orange"/>

            <div className="componentArea">
                <ColourButton onPress={changeColour} colour="orange"/>
                <ColourButton onPress={changeColour} colour="yellow"/>
                <ColourButton onPress={changeColour} colour="green"/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;