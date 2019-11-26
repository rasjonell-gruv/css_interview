import React from "react";

import getImage from "./images";
import useStyles from "./styles";
import SmallBanner from "./SmallBanner";
import EventDescription from "./EventDescription";

const Info = ({ datePicked }) => {
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <SmallBanner image={getImage(datePicked)} />
      {/* <EventDescription date={datePicked} /> */}
    </div>
  );
};

export default Info;
