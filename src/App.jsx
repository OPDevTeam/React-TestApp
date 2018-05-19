import React from 'react';
import UpdateButton from './components/UpdateButton';
import ModelView from './components/Model/ModelView';
import SampleData from './SampleData';
import AutoUpdateToggle from './components/AutoUpdateToggle';

class App extends React.Component {

  timerId;
  constructor() {
    super();
    this.state = {
      model: {
        name: "Undefined",
        id: 0,
        components: []
      },
      autoUpdate: false
    }

    if(this.state.autoUpdate)
      this.autoUpdateOn();

  }

  render() {
          //<UpdateButton update={() => this.updateData()} />
      return(
        <div style={{margin: "10px"}}>
          <h5>Model Name: {this.state.model.name}</h5>
          <h5>Model Id: {this.state.model.id}</h5>
          <AutoUpdateToggle checked={this.state.autoUpdate} toggle={() => this.toggleAutoUpdate()} />

          <ModelView width={800} height={800} model={this.state.model}/>
        </div>
      );
  }

  componentDidMount() {
    console.log("Component Did Mount");
    this.updateData();
  }
  
  updateData() {
    fetch("http://localhost:3030/api/model")
    .then(results => {
      return results.json();
    })
    .then(data => {
      console.log(data);
      this.setState({model: data});
    });

  }

  toggleAutoUpdate() {
    if(this.state.autoUpdate) {
      this.autoUpdateOff();
      this.state.autoUpdate = false;
    }
    else {
      this.autoUpdateOn();
      this.state.autoUpdate = true;
    }

  }

  autoUpdateOn() {
    this.timerId = setInterval(() => { 
      console.log("autoUpdateOn");
      this.updateData()
      }, 
      3000);
  }

  autoUpdateOff() {
    clearInterval(this.timerId);
    console.log("autoUpdateOff");

  }
}


export default App;