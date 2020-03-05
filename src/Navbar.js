import React, { Component } from 'react';
import Slider from 'rc-slider';
import './navbar.css';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton  from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            format:"hex",open:false
         }
         this.handleChange=this.handleChange.bind(this);
         this.closeSnackbar=this.closeSnackbar.bind(this);
    }
    closeSnackbar(){
        this.setState({
            open:false,
        })
    }
    handleChange(e){
        this.setState({
            format:e.target.value,
            open:true
        },()=>(
            this.props.handleChange(this.state.format)
            
        ));
        
    }
    render() { 
        let format=this.state.format;
        return ( <header className="Navbar">
            <div className="logo">
                <Link to="/">
                Colorpalette
                </Link>
                
            </div>
            <div className="slider">
            <Slider defaultValue={this.props.level}
             min={100} max={900}
              onAfterChange={this.props.changeLevel} step={100}/>
            
            </div>
            <div className="select-container">
            <Select value={this.state.format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #FFF </MenuItem>
            <MenuItem value="rgb">RGB -rgb(255,255,255) </MenuItem>    
            <MenuItem value="rgba">RGBA-rgb(255,255,255,1.0)</MenuItem>    
            </Select>   

            </div>
            <Snackbar onClose={this.closeSnackbar} anchorOrigin={{vertical:"bottom",horizontal:"right"}} open={this.state.open}
            autoHideDuration={2500} message={<span id='message-id'> Format changed to {format}</span>} ContentProps={
                { "aria-describedby":"message-id"}}
                action={[
                    <IconButton onClick={this.closeSnackbar} color="inherit">
                        <CloseIcon/>
                    </IconButton>
                ]
                    }
                />
        </header>     );
    }
}
 
export default Navbar;