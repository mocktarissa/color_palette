
import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css'
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const colorBoxes=this.props.colors.map(background=> <ColorBox background={background.color} name={background.name}/>)
        return ( <div className="Palette">
            {/** Nav bar goes here*/}
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
