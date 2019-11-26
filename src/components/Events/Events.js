import React, { useState } from "react";
import Calendar from "react-calendar-material";
import Grid from '@material-ui/core/Grid';

import EventDescription from "./EventDescription";
import Info from "./Info";
import useStyles from "./styles";

const Banner = () => {
  const classes = useStyles();
  const [datePicked, setDatePicked] = useState(new Date());

  return (
    <div className={classes.root}>
        <Grid className={classes.gridContainer} container direction="row" justify="space-between">
          <Grid item xs={12} sm={12} md={4} className={classes.calendar}>
            <Calendar
              showHeader={false}
              accentColor="blue"
              orientation="flex-col"
              onDatePicked={setDatePicked}
              className={classes.calendar}
            />
          </Grid>
          <Grid item className={classes.evtBanner} sm={12} md={4}>
            <Info datePicked={datePicked} />
          </Grid>
          <Grid item className={classes.gridItem} md={4} sm={12}>
            <EventDescription date={datePicked} />
          </Grid>
        </Grid>
    </div>
  );
};

export default Banner;
