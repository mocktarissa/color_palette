import React from 'react';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';

const styles={
    root:{
        backgroundColor:"white",
        borderRadius:"5px",
        padding:"0.5rem",
        position:"relative",
        overflow:"hidden",
        border: "1px solid black",
        "&:hover":{
            cursor:"pointer"
        }
    },
    colors:{
        backgroundColor:"grey",
        
    },
    title:{
        display:"flex",
        justifycontent:"space-between",
        alignItem:"center",
        margin: "0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
       marginLeft:"0.5rem",
       fontSize:"1.5rem" 
    }
}
 function MiniPalette(props){
     const {classes,paletteName,emoji}=props;
    return(
        <div className={classes.root}>
            <div className={classes.colors}>
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles )(MiniPalette)