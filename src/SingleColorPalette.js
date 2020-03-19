import React, { Component } from 'react';
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            format:"hex"
         }
         this.changeFormat=this.changeFormat.bind(this);
        this._shades=this.gatherShade(this.props.palette,this.props.id);
    }
    todisplay(a,b,c){
        if(this.state.format==="hex"){
            return a
        }
        if(this.state.format==="rgb"){
            return b
        }
        if(this.state.format==="rgba"){
            return c
        }
    }
    gatherShade(palette,colorToFilterBy){
        let shades=[];
        let allColors=palette.colors;
        for(let k in allColors){
            shades=shades.concat(allColors[k].filter(color=> color.id===colorToFilterBy));
        }
        return shades.slice(1);
    }
    componentDidMount(){
        console.log(this._shades);
    }
    changeFormat(val){
        this.setState(
            {format:val}
        )
    }
    render() { 
        const {format}=this.state;
        const {paletteName,emoji}=this.props.palette;
        const col=this._shades.map(
            s=> <ColorBox 
            key={s.id}
            name={s.name}
            background={s[format]}
            showMore={false}
            />
        )
        return (  
           <div className="Palette" >
               <Navbar handleChange={this.changeFormat} displaySlider={false}/>
               

           <div className="Palette-colors">
               {col}
           </div>
           <PaletteFooter paletteName={paletteName} emoji={emoji}/>
           </div>
        );
    }
}
 
export default SingleColorPalette;