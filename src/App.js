import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Palette from './Palette'
import seedColors from './seedColor';
import {generatePalette} from './ChromaHelper'
class  App extends React.Component {
 constructor(props){
   super(props);
   this.state={

   }
   this.findPalette=this.findPalette.bind(this);
 }
 findPalette(id){
  return seedColors.find((palette)=>( palette.id===id))
 }
  render(){
console.log(generatePalette(seedColors[4]));
  
  return (<Switch>
<Route exact path="/" render={()=> <h1> Paletttee ddd</h1> } />
  
  
    <Route exact path="/palette/:id" render={(routeProps)=> <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> }/>
  </Switch>
  
  
  
  /* <div className="App">
      
      <Palette palette={generatePalette(seedColors[1])}></Palette>
       </div> */
    
  );
  }
}

export default App;
