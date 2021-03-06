import React from 'react';
import UpdateButton from './components/UpdateButton';
import ModelView from './components/Model/ModelView';
import SampleData from './SampleData';
import AutoUpdateToggle from './components/AutoUpdateToggle';
import {AddPipeForm} from './components/AddPipe';
import {AddGateValveForm} from './components/AddValve';

class App extends React.Component {

  timerId;
  constructor() {
    super();
    this.state = {
      model: undefined,
      viewWidth: 1000,
      viewHeight: 800,
      autoUpdate: false
    }

    if(this.state.autoUpdate)
      this.autoUpdateOn();

  }

  render() {
          //<UpdateButton update={() => this.updateData()} />
      if(!this.state.model) {
        return (
          <h5>Model has not been created</h5>
        );
      }
      return(
        <div style={{margin: "10px"}}>
          <h6>[{this.state.model.id}] Model Name: {this.state.model.name}</h6>
          <h6>Created On: {this.state.model.createdOn}</h6>
          <h6> Modified On: {this.state.model.modifiedOn}</h6>
          <AutoUpdateToggle checked={this.state.autoUpdate} toggle={() => this.toggleAutoUpdate()} />
          <AddPipeForm />
          <AddGateValveForm />

          <ModelView width={this.state.viewWidth} height={this.state.viewHeight} model={this.state.model}/>
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