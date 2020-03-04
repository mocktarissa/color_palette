
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            level:500,
         }
         this.changeLevel=this.changeLevel.bind(this)
    }
    changeLevel(level){
        this.setState(
            {level:level}
        )
    }
    render() { 
        const colorBoxes=this.props.palette.colors[this.state.level].map(background=> <ColorBox background={background.hex} name={background.name}/>)
        return ( <div className="Palette">
            {/** Nav bar goes here*/}
            <Navbar level={this.state.level} changeLevel={this.changeLevel}/>
            <div className="Palette-colors">
                {
                  colorBoxes
                }
            </div>
            {
                /* footer  */
            }
        </div> );
    }
}
 
export default Palette;
