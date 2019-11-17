import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "#0C0C0C"
  },
  bannerPic: {
    backgroundImage: "url(conductor.png)",
    backgroundRepeat: "no-repeat",
    position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "45%",
    backgroundSize: "100%",
    [theme.breakpoints.down('md')] : {
      display: "none"
    }
  },
  bannerText: {
    [theme.breakpoints.down('md')] : {
      backgroundImage: "url(conductor.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "85%",
      backgroundPosition: "right",
      fontSize: 14
    },
  },
  textWrapper: {
    padding: "70px",
    [theme.breakpoints.down('md')] : {
      padding: "20px",
      "& h4": {
        fontSize: 18,
        paddingBottom: "30px"
      },
      "& h5": {
        fontSize: 14,
        width: "90%",
        paddingBottom: "30px"
      }
    }
  },
  textBlocks: {
    color: "#FFFFFF",
    fontFamily: "Playfair Display",
    paddingBottom: "50px",
    
  },
  btn: {
    height: "auto",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "1px solid white",
    "&:hover" : {
      backgroundColor: "transparent"
    }
  },
  btnSpan: {
    display: "inline-block",
    padding: theme.spacing(0, 5)
  }
}));
