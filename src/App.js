import React from "react";
import boxes from "./boxes";
import './App.css';

export default function App() {
    const [boxesData, setBoxesData] = React.useState(boxes);
    
    const boxElements = boxesData.map(box => {
        return (
            <p key={box.id} className="boxes"></p>
        )
    });

    return (
        <main>
            {boxElements}
        </main>
    );
}
