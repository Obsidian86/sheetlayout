import React from 'react';
import Part from './Part';

const FullSheet = (props) => {

    let sheetWidth = props.width;
    let sheetHeight = props.height;
    let aspect = sheetHeight / sheetWidth;
    let shape = props.shape;

    let partWidth = (props.partWidth / sheetWidth) * props.appWidth;
    let partHeight = (props.partHeight / sheetHeight) * (props.appWidth * aspect);

    let margin = (props.margin / sheetWidth) * props.appWidth;

    const getCount = () =>{
        let across = Math.floor(props.width/props.partWidth);
        let down = Math.floor(props.height/props.partHeight);
        return across * down;
    }
     
    let countParts = props.count === "fill" ? getCount() : props.count; 
    let count = [...Array(countParts)];

    const sheetStyles = {
        border: "1px solid black",
        boxShadow: "3px 3px 3px #d3d3d3",
        width: `${props.appWidth}px`,
        height: `${props.appWidth * aspect}px`,
        margin: "0",
        marginBottom: "20px",
        padding: "0",
        backgroundColor: "#fff",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
    return (
        <div>
            <p> Sheet size: {sheetHeight}" x {sheetWidth}" </p>
            <div style={sheetStyles}>
                { 
                    count.map((s, i) => 
                        <Part 
                            width={partWidth} 
                            height={partHeight} 
                            key={i} 
                            margin={margin}
                            shape={shape} 
                            number={i+1}
                        />
                    ) 
                }
            </div>
            <button onClick={ () => props.deleteSheet(props.index) }>Delete {props.index}</button>
        </div>
    );  
}

export default FullSheet;