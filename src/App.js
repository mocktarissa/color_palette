import React from 'react';
import './App.css';
import Palette from './Palette'
import seedColors from './seedColor'
class  App extends React.Component {
 constructor(props){
   super(props);
 }
  render(){

  
  return (
    <div className="App">
      Hello from React
      <Palette palette={seedColors[5]}></Palette>
       </div>
  );
  }
}

export default App;
