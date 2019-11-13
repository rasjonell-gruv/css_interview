import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Gruv Interview
          </Typography>
          {menuItems.map(item => (
            <Button color="inherit" key={item}>
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default _AppBar;
