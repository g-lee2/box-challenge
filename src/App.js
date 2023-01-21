import React from "react";
import boxes from "./boxes";
import Box from "./components/Box";
import './App.css';

export default function App() {
    const [boxesData, setBoxesData] = React.useState(boxes);

    function handleClick(id) {
      setBoxesData(prevBoxes => {
        return prevBoxes.map((box) => {
          return box.id === id ? {...box, on: !box.on} : box
        })
      })
    }
    
    const boxElements = boxesData.map(box => {
        return (
            <Box 
              key={box.id}
              id={box.id}
              on={box.on} 
              handleClick={handleClick}
            />
        )
    });

    return (
        <main>
            {boxElements}
        </main>
    );
}
