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
    
    // Without arrow functions
    // function handleClick(id) {
    //   setBoxesData(function(prevBoxes) {
    //       return prevBoxes.map(function(box) {
    //           if (box.id === id) {
    //               return Object.assign({}, box, { on: !box.on });
    //           } else {
    //               return box;
    //           }
    //       });
    //   });
    // } 
    
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
