import React from 'react';

const Part = (props) => {
    const styles = {
        width: props.width + "px",
        height: props.height + "px",
        boxShadow: "inset 0 0 3px black",
        lineHeight: props.height + "px",
        textAlign: "center",
        borderRadius: props.shape === "circle" ? "50%" : "none",
        marginLeft: props.margin + "px",
        marginTop: props.margin + "px",
        fontSize: ".9em",
        backgroundColor: props.error ? "red": "#c2c2c2",
        float: "left"
    }

    return(<div style={styles}>{props.number}</div>);
}

export default Part;