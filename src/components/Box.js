import React from "react";

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
    return (
        <div className="boxes" style={styles}></div>
    )
}