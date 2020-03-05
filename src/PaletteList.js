
import React, { Component } from 'react';
import seedColors from './seedColor';
import {Link} from 'react-router-dom'
import './palette-list.css'
class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const lis= seedColors.map( c=> <Link to={`/palette/${c.id}`} className="palette">
            {c.paletteName}
        </Link>)
        return ( <div className="palette-group">
            <h1>Palette list</h1>
            {lis}
        </div> );
    }
}
 
export default PaletteList;