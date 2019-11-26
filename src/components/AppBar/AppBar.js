import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from '@material-ui/core/Grid';

import useStyles from "./styles";

const menuItems = [
  "Concerts",
  "Subscriptions",
  "Orchestra",
  "In Practice",
  "Media",
  "Contact Us"
];

const _AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.headerBar} position="static">
        <Toolbar>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Grid item>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography className={classes.title}>
                    POA
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.name}>
                    The Philarmonic <br /> Orchestra of Armenia
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.menus}>
              {menuItems.map(item => (
                <Button color="inherit" key={item}>
                  {item}
                </Button>
              ))}
            </Grid>
            <MenuIcon className={classes.burgerMenu} />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default _AppBar;
