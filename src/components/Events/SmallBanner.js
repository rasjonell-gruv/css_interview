import React from "react";

import useStyles from "./bannerStyles";

const SmallBanner = props => {
  const classes = useStyles(props);

  return <div className={classes.root} />;
};

export default SmallBanner;
