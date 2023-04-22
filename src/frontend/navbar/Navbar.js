// Importing files from Material-UI
import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'; 
import { Link, useHistory } from "react-router-dom";
import { UserContext } from '../../App';
// Using Inline Styling
const useStyles = makeStyles((theme) => ({
root: {
	flexGrow: 1,
},
menuButton: {
    marginRight:2, 
  },
link: {
    textDecoration: "none",
    color: "black",
    fontSize: "18px",
    marginLeft: 350,
    "&:hover": {
      color: "white",
      borderBottom: "2px solid black",
    },
  },

}));

// Exporting Default Navbar to the App.js File
export default function Navbar() {
const {state, dispatch} = useContext(UserContext);
const RenderMenu = () => {
  if(state === true){
    return (
      <>
      <Link to="/info" className={classes.link}>
              Info
            </Link>                        
            </>
    )
  }
  else{
    return (
      <Link to="/register" className={classes.link}>
              Signup
            </Link>
    )
  }
}
 
const classes = useStyles();
return (
	<div className={classes.root}>
	<AppBar position="static">
		<Toolbar variant="dense">
		<Typography variant="h6" color="inherit">
			Fitness Tracker
		</Typography>
        <div className={classes.navlinks}>
            <RenderMenu />
            
          </div>
		</Toolbar>
	</AppBar>
	</div>
);
}
