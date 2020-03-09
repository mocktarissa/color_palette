
import React, { Component } from 'react';
import seedColors from './seedColor';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette'

import {withStyles} from '@material-ui/styles'
const styles={
    root:{
        height: "100%",
        backgroundColor:"blue",
        
        display:"flex",
        alignItems:"flex-start",
        justifyContent:"center",
        border:"1px solid black"
    },
    container:{
        width:"50%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        flexWrap:"wrap",
    },
    nav:{
        display:"flex",
        width:"100%",
        justifyContent:"space-between",
        color:"white",

    },
    palette:{
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(3,30%)",
        gridGap:"5%"
    }
};
class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        const lis= seedColors.map( c=> <MiniPalette {...c}>
            
        </MiniPalette>)
        
        return ( 
            <div className={this.props.classes.root}>
            <div className={this.props.classes.container}>
                <nav className={this.props.classes.nav}>
                    <h1>Palette List</h1>
                </nav>
                <div className={this.props.classes.palette}>
                {lis}
                </div>
            </div>
            
            
        </div> 
        );
    }
}
 
export default withStyles(styles)(PaletteList);