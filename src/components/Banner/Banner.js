import React from "react";
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



import useStyles from "./styles";

const Banner = () => {
  const classes = useStyles();

  return <div className={classes.root}>
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid className={classes.bannerText} item md={12} lg={5}>
        <Box className={classes.textWrapper}>
          <Typography className={classes.textBlocks} variant="h4">
            15th Khachaturian International 
            <br/>
            Competition | First Round
          </Typography>
          <Typography className={classes.textBlocks} variant="h5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>

          <Fab
            variant="extended"
            size="medium"
            className={classes.btn}
          >
            <span className={classes.btnSpan}>
              More
            </span>
          </Fab>
        </Box>

      </Grid>
      <Grid className={classes.bannerPic} item md={12} lg={7}>
      </Grid>
    </Grid>
  </div>;
};

export default Banner;
