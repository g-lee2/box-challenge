import React from "react";

export default function Box(props) {
    
  const styles = {
      backgroundColor: props.on ? "#222222" : "transparent"
  }
  
    return (
        <div 
          className="boxes" 
          style={styles} 
          onClick={() => props.handleClick(props.id)}>
        </div>
    )
}