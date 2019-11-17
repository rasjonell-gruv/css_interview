import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TimerIcon from '@material-ui/icons/Timer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import getInfo from "./infos";
import useStyles from "./styles";

const EventDescription = ({ date }) => {
  const classes = useStyles();

  const { title, description } = getInfo(date.getDay());

  return (
    <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader} 
          title={
            <div className={classes.headerWrapper}>
              <div>
                <Typography color="textSecondary" className={classes.title}>
                  <DateRangeOutlinedIcon/> <span className={classes.iconText}> {date.toString().split(' (')[0]} </span>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <LocationOnIcon /> <span className={classes.iconText}> Location </span>
                </Typography>
              </div>
              <div>
                <Typography color="textSecondary" className={classes.title}>
                  <TimerIcon /> <span className={classes.iconText}> Countdown </span>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <MusicNoteIcon /> <span className={classes.iconText}> Genre </span>
                </Typography>
              </div>
              <div>
                <TimerIcon /> <span> Countdown </span>
              </div>
            </div>
          }>
        </CardHeader>
      <CardContent>

        <Typography className={classes.cardContentTitle} variant="body2" component="p">
          <span> {description} </span> <span className={classes.evtTimeMob}> 16:00 </span>
        </Typography>
        <Typography className={classes.cardContentDesc} variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </Typography>
      </CardContent>
      <CardActions className={classes.btnBlock}>
        <Button className={classes.actionBtn} size="large">Learn More</Button>
        <Button className={classes.actionBtn} size="large">Book</Button>
      </CardActions>
    </Card>
  );
};

export default EventDescription;
