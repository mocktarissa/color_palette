
import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import './PaletteFooter'
import PaletteFooter from './PaletteFooter';


class Palette extends React.Component {
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
        console.log("is it")
        console.log(this.props.palette.id);
        const id=this.props.palette.id;
        const paletteName= this.props.palette.paletteName;
        const colorBoxes=this.props.palette.colors[this.state.level].map(background=> <ColorBox background={background[this.state.format]} key={background.id} name={background.name} id={background.id} paletteId={id}/>)
        const emoji= this.props.palette.emoji;
        return ( <div className="Palette">
            {/** Nav bar goes here*/}
            <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
            <div className="Palette-colors">
                {
                  colorBoxes
                }
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            
        </div> );
    }
}
 
export default Palette;
