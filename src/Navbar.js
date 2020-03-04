import React, { Component } from 'react';
import Slider from 'rc-slider';
import './navbar.css';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <header className="Navbar">
            <div className="logo">
                <a href="#">Colorpalette</a>
            </div>
            <div className="slider">
            <Slider defaultValue={this.props.level}
             min={100} max={900}
              onAfterChange={this.props.changeLevel} step={100}/>
            
            </div>
            <div className="select-container">
            <Select >
            <MenuItem value="hex">HEX - #FFF </MenuItem>
            <MenuItem value="rgb">RGB -rgb(255,255,255) </MenuItem>    
            <MenuItem value="rgba">RGBA-rgb(255,255,255,1.0)</MenuItem>    
            </Select>   

            </div>
        </header>     );
    }
}
 
export default Navbar;