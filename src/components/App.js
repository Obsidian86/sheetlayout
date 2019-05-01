import React, { Component } from 'react';
import FullSheet from './FullSheet';
import AddSheet from './AddSheet';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      appWidth: null,
      sheets: []
    });
  }

  setWidth() {
    this.setState({
      appWidth: this.refs.app.offsetWidth
    });
  }

  componentDidMount() {
    this.setWidth();
    window.addEventListener("resize", () => {
      this.setWidth();
    });
  }
  deleteSheet = (sheet) => {
    this.setState({
      sheets: this.state.sheets.length > 1 ? this.state.sheets.splice(sheet -1, 1) : []
    });
  }
  addSheet = (newSheet) =>{  
    this.setState({
      sheets: [...this.state.sheets, newSheet]
    });
  }
  render() {
    let { sheets, appWidth } = this.state;
    return (
      <span>
        <header className="App-header">
          Add sheet
          <AddSheet addSheet={this.addSheet} />
        </header>
      
        <div className="App" ref="app"> 
          {
            sheets.map((sheet, index) =>
              <FullSheet
                appWidth={appWidth}
                width={sheet.width}
                height={sheet.height}
                partHeight={sheet.partHeight}
                partWidth={sheet.partWidth}
                shape={sheet.shape}
                count={sheet.count}
                margin={sheet.margin}
                index={index}
                deleteSheet={this.deleteSheet}
                key={index}
              />
            )
          }
        </div>
      </span>
    );
  }
}

export default App;
