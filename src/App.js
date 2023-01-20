import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";
import './App.css';

export default function App() {
    const [boxesData, setBoxesData] = React.useState(boxes);
    
    const boxElements = boxesData.map(box => {
        return (
            <Box on={box.on} key={box.id}  />
        )
    });

    return (
        <main>
            {boxElements}
        </main>
    );
}
