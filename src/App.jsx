import React from 'react';
import ModelView from './components/Model/ModelView';

let model = { 
  name: "My Model",
  id: 1,
  components: [
	{
    name: "comp1", 
    graphics: [
      {type: 0, start: {x:10, y:10}, end: {x:50, y: 10}},
      {type: 1, origin: {x:30, y:10}, radius:5, fill:"purple"}
    
    ]
  },
	{
    name: "comp2", 
    graphics: [
      {type: 0, start: {x:10, y:30}, end: {x:50, y: 30}, width:5, color: "red"},
      {type: 1, origin: {x:30, y:30}, radius:8, fill: "green", stroke: "blue", strokeWidth: 3}
  
    ]
   },
   {
    name: "comp3", 
    graphics: [
      {type: 0, start: {x:10, y:50}, end: {x:50, y: 50}, width:5, color: "red"},
      {type: 2, start: {x:20, y:40}, end: {x:40, y:60},  fill: "green", stroke: "blue", strokeWidth: 3}
  
    ]
   }
  ]
};

const App = (props) => {
  return(
    <ModelView width={400} height={600} model={model}/>
  );
}

export default App;