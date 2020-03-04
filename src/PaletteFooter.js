import React from 'react';
import './paletteFooter.css'
class PaletteFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <footer className="palette-footer">
               
               
        {this.props.paletteName}
          
        <span className="emoji">{this.props.emoji}</span>
     </footer> );
    }
}
 
export default PaletteFooter;