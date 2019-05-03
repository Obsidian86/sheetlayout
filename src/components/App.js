import React, { Component } from 'react';
import FullSheet from './FullSheet';
import AddSheet from './AddSheet'; 
import Transition from './Transition';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      appWidth: null,
      drawerOpened: false,
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
      sheets: this.state.sheets.length > 1 ? this.state.sheets.filter((s, index) => sheet !== index ) : []
    });
  }
  addSheet = (newSheet) =>{  
    this.setState({
      sheets: [...this.state.sheets, newSheet],
      drawerOpened: false
    }); 
  }
  toggleDrawer = () =>{
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }
  render() {
    let { sheets, appWidth, drawerOpened } = this.state;
    return (
      <span>
        <header className="App-header" onClick={this.toggleDrawer}>
          Add sheet
        </header>
        
        <Transition showIt={drawerOpened} thisClass="fade">
          <AddSheet addSheet={this.addSheet} toggleDrawer={this.toggleDrawer}/> 
        </Transition>

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
