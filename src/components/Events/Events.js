import React, { useState } from "react";
import Calendar from "react-calendar-material";

import Info from "./Info";
import useStyles from "./styles";

const Banner = () => {
  const classes = useStyles();
  const [datePicked, setDatePicked] = useState(new Date());

  return (
    <div className={classes.root}>
      <div>
        <Calendar
          showHeader={false}
          accentColor="blue"
          orientation="flex-col"
          onDatePicked={setDatePicked}
        />
      </div>
      <Info datePicked={datePicked} />
    </div>
  );
};

export default Banner;
