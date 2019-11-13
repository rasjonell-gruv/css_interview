import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import getInfo from "./infos";
import useStyles from "./styles";

const EventDescription = ({ date }) => {
  const classes = useStyles();

  const { title, description } = getInfo(date.getDay());

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography color="textSecondary" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {date.toString()}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default EventDescription;
