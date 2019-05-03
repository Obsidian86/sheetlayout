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

   
    let across = Math.floor((props.width - parseFloat(props.margin)) / (parseFloat(props.partWidth) + parseFloat(props.margin)));
    let down = Math.floor((props.height - parseFloat(props.margin)) / (parseFloat(props.partHeight) + parseFloat(props.margin)));
    let maxCount = across * down; 
  
    let countParts = props.count === "fill" ? maxCount : parseInt(props.count);
    let count = [...Array(countParts)];

    const sheetStyles = {
        border: "1px solid #999",
        boxShadow: "3px 3px 3px #d3d3d3",
        width: `${props.appWidth}px`,
        height: `${props.appWidth * aspect}px`,
        margin: "0",
        marginBottom: "20px",
        padding: "0",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
    
    return (
        <div style={{marginBottom: "30px", marginTop: "24px"}}>
            <p style={{ fontWeight: "bold", marginBottom: "10px", color: "white", backgroundColor: "#333", borderRadius: "5px", padding: "6px", display:"inline-block"}}> Sheet size: {sheetHeight}" x {sheetWidth}" -{maxCount} total ({props.partWidth}" x {props.partHeight}") fit on sheet | {across} across and {down} down</p>
            <div style={sheetStyles}>
                {
                    count.map((s, i) =>
                        <Part
                            width={partWidth}
                            height={partHeight}
                            key={i}
                            margin={margin}
                            shape={shape}
                            number={i + 1}
                            error={i >= maxCount}
                            endRow = { (i + 1) % across === 0 }
                        />
                    )
                }
            </div>
            <button style={{
                border: "none",
                background: "none",
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
                padding: "10px 14px",
                clear: "both",
                display: "block",
                marginTop: "20px"
            }} onClick={() => props.deleteSheet(props.index)}>Delete</button>
        </div>
    );
}

export default FullSheet;