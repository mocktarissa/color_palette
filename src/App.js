import React from 'react';
import './App.css';
import Palette from './Palette'
import seedColors from './seedColor';
import {generatePalette} from './ChromaHelper'
class  App extends React.Component {
 constructor(props){
   super(props);
   this.state={

   }
 }
  render(){
console.log(generatePalette(seedColors[4]));
  
  return (
    <div className="App">
      Hello from React
      <Palette {...seedColors[4]}></Palette>
       </div>
  );
  }
}

export default App;
