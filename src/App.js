import React from "react";
import Events from "components/Events";
import AppBar from "components/AppBar";
import Banner from "components/Banner";

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <Banner />
      <Events />
    </div>
  );
};

export default App;
