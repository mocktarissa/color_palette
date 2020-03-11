import React from 'react';

import {Route,Switch,withRouter} from 'react-router-dom'
import Palette from './Palette'
import seedColors from './seedColor';
import {generatePalette} from './ChromaHelper';
import PaletteList from './PaletteList'
import SingleColorPalette from "./SingleColorPalette"
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
<Route exact path="/" render={(routeProps)=> <PaletteList {...routeProps}/> } />
  
  
    <Route exact path="/palette/:id" render={(routeProps)=> <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))}/> }/>
    <Route exact path="/palette/:paletteId/:colorId" render={(routeProps)=> <SingleColorPalette/> }/>
  </Switch>
  
  
  
  /* <div className="App">
      
      <Palette palette={generatePalette(seedColors[1])}></Palette>
       </div> */
    
  );
  }
}

export default App;
