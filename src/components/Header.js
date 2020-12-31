  
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.typographyStyles}>
        <Typography >
          Movie List
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;