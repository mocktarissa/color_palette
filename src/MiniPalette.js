import React from 'react';
import { purple } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom'
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
        boxSizing:"border-box",
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(5,20%)",
        borderRadius:"5px",
        overflow:"hidden",
        backgroundColor:"red"
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
    },
    miniColor:{
        height:"2.5rem",
        width:"100%",
        margin:"0 auto",
        display:"inline-block"
    },
    link:{
        cursor:"pointer",
        textDecoration:"none"
    }
}
 function MiniPalette(props){
     const {classes,paletteName,emoji,colors,id}=props;
     const miniColorBoxes= colors.map(
         color=>(
             <div className={classes.miniColor} style={{
                 backgroundColor: color.color
             }} key={color.name}>

             </div>
         )
     )
    return(
        <div className={classes.root} onClick={props.handleClick}>
           
             <div className={classes.colors}>
            {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    )
}

export default withStyles(styles )(MiniPalette)