import React, {useState} from 'react';
import "./styles/addSheets.css";

const AddSheet = (props) => {

    const [sheet, updateSheet] = useState(
        {
          width: 96,
          height: 48,
          margin: .5,
          partWidth: 15,
          partHeight: 15,
          shape: "circle",
          count: "fill"
        }); 

    const handleChange = (event) =>{ 
        updateSheet({...sheet, [event.target.id]: event.target.value});
    }  
    return(
        <div className='form-container' style={{display: "flex"}}>
            <div style={{width: "120%", margin: "0", padding:"0", display: "flex", justifyContent: "space-between", height: "50px", marginTop: "15px"}}>
                <h1 style={{width: "99%", margin: "0", paddingTop: "8px"}}> Sheet properties </h1>
                <div style={{width: "1%", alignContent:"center" }}>
                    <button onClick={props.toggleDrawer} style={{  
                        width: "auto",
                        margin: "10px 0 0 0",
                        border: "2px solid red",
                        background: "none",
                        borderRadius: "50%",
                        fontWeight: "bold",
                        color: "red",
                        padding: "3px 6px"
                    }} aria-label="test">X</button>
                </div> 
            </div>
            <div style={{width: "45%"}}>
                <label htmlFor='width'>Width</label>
                <input type='text' name='width' id='width' value={sheet.width} onChange={handleChange} />
            </div>
            <div style={{width: "45%"}}>
                <label htmlFor='width'>Height</label>
                <input type='text' name='height' id='height' value={sheet.height} onChange={handleChange} />
            </div> 
            <div style={{width: "45%"}}>
                <label htmlFor='width'>Part width</label>
                <input type='text' name='partWidth' id='partWidth' value={sheet.partWidth} onChange={handleChange} />
            </div>
            <div style={{width: "45%"}}>
                <label htmlFor='width'>Part height</label>
                <input type='text' name='partHeight' id='partHeight' value={sheet.partHeight} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Margin</label>
                <input type='text' name='margin' id='margin' value={sheet.margin} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Shape</label> 
                <select type='text' name='shape' id='shape' value={sheet.shape} onChange={handleChange} >
                    <option value="square">Square / Rectangle</option>
                    <option value="circle">Circle</option>
                </select>
            </div>
            <div>
                <label htmlFor='width'>Count</label>
                <input type='text' name='count' id='count' value={sheet.count} onChange={handleChange} />
            </div>
            <div style={{width: "100%", textAlign: "center"}}>
                <button aria-label="Add new sheet" onClick={() => props.addSheet(sheet)}>Add Sheet</button>
            </div>
            
        </div>
    );
}

export default AddSheet;