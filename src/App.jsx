import React from 'react';
import ModelView from './components/Model/ModelView';
import SampleData from './SampleData';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: {
        name: "Undefined",
        id: 0,
        components: []
      }
    }
  }

  render() {
    return(
        <ModelView width={400} height={200} model={this.state.data}/>
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
      this.setState({data: data});
    });

  }
}


export default App;