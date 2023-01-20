import React from "react";

export default function Box(props) {
  const [boxColor, setBoxColor] = React.useState(props.on);
    
  const styles = {
      backgroundColor: boxColor ? "#222222" : "transparent"
  }
  
  function handleClick() {
      setBoxColor(prevBoxColor => !prevBoxColor)
  }
  
    return (
        <div className="boxes" style={styles} onClick={handleClick}></div>
    )
}