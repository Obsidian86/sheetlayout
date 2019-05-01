import React, {useState} from 'react';
import "./styles/addSheets.css";

const AddSheet = (props) => {

    const [sheet, updateSheet] = useState(
        {
          width: 48,
          height: 48,
          margin: 0,
          partWidth: 2,
          partHeight: 2,
          shape: "circle",
          count: "fill"
        });

    const handleChange = (event) =>{ 
        updateSheet({...sheet, [event.target.id]: event.target.value});
    }  
    return(
        <div className='form-container'>
            <div>
                <label htmlFor='width'>Width</label>
                <input type='text' name='width' id='width' value={sheet.width} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Height</label>
                <input type='text' name='height' id='height' value={sheet.height} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Margin</label>
                <input type='text' name='margin' id='margin' value={sheet.margin} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Part width</label>
                <input type='text' name='partWidth' id='partWidth' value={sheet.partWidth} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Part height</label>
                <input type='text' name='partHeight' id='partHeight' value={sheet.partHeight} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Shape</label>
                <input type='text' name='shape' id='shape' value={sheet.shape} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='width'>Count</label>
                <input type='text' name='count' id='count' value={sheet.count} onChange={handleChange} />
            </div>
            <div>
                <button onClick={() => props.addSheet(sheet)}>Add Sheet</button>
            </div>
            
        </div>
    );
}

export default AddSheet;