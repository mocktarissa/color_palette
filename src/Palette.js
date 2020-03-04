
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            level:500,
            format:"hex"
         }
         this.changeLevel=this.changeLevel.bind(this)
         this.changeFormat=this.changeFormat.bind(this);
        }
        changeFormat(val){
            this.setState(
                {format:val}
            )
        }
    changeLevel(level){
        this.setState(
            {level:level}
        )
    }
    render() { 
        const colorBoxes=this.props.palette.colors[this.state.level].map(background=> <ColorBox background={background[this.state.format]} name={background.name}/>)
        return ( <div className="Palette">
            {/** Nav bar goes here*/}
            <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
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
