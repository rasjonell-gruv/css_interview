import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  gridContainer: {
  },
  gridItem: {
    height: 600,
    [theme.breakpoints.down('md')]: {
      width: "100%",
      height: "auto"
    }
  },
  calendar: {
    "& .month": {
      backgroundColor: "#E5E6E6",
      padding: "20px 0px 20px 0px",
      margin: 0,
      [theme.breakpoints.down('md')]: {
        padding: "10px 0px 10px 0px"
      },
      [theme.breakpoints.up('md')]: {
        fontSize: "35px"
      },
    },
    "& .padding": {
      padding: 0
    },
    "& .selected, & .current": {
      backgroundColor: "#E3B875 !important",
      border: "2px solid #E3B875 !important",
      color: "#ffffff !important",
      top: "calc(50% - 25px)",
      left: "calc(50% - 25px)",
      borderRadius: "25px",
      width: "50px",
      height: "50px",
    },
    "& .current ~ p": {
      color: "#ffffff !important"
    },
    "& .footer": {
      width: "auto",
      minWidth: "auto",
      [theme.breakpoints.up('md')]: {
        fontSize: "35px"
      },
    }
  },
  card: {
    minWidth: 275,
    height: "calc(100% - 80px)",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      marginTop: 80,
      marginLeft: 20,
    },
    [theme.breakpoints.down('md')]: {
      height: "auto",
      width: "100%"
    }
  },
  info: {
    height: "100%",
    maerginLeft: "-1px"
  },
  bullet: {
    display: "inline-block"
  },
  title: {
    fontSize: 14,
    display: "flex",
    alignItems: "top",
  },
  pos: {
    display: "flex",
    alignItems: "center"
  },
  cardHeader: {
    backgroundColor: "#E9E9E9",
    height: 100,
    position: "relative",
    "& > div": {
      height: "100%",
      "& > span": {
        height: "100%",
      }
    },
    [theme.breakpoints.down('sm')] : {
      height: "auto",
    },
    "&:before": {
      content: "' '",
      position: "absolute",
      width: "1px",
      backgroundColor: "#979797",
      right: "calc(50% - 1px)",
      top: "-16px",
      bottom: "0",
      [theme.breakpoints.down('sm')] : {
        display: "none"
      }
    }
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row", 
    height: "100%",
    "& > div": {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      [theme.breakpoints.down('md')]: {
        flexDirection: "row",
        alignItems: "center"
      },
      "&:last-child": {
        paddingLeft: "16px"
      }
    },
    [theme.breakpoints.up('md')] : {
      "& > div:last-child": {
        display: "none"
      },
    },
    [theme.breakpoints.down('md')]: {
      "& > div:not(:last-child)": {
        display: "none"
      },
      "& > div:last-child": {
        fontSize: "16px",
        width: "35%",
      },
    },
  },
  iconText: {
    paddingLeft: "10px"
  },
  cardContentTitle: { 
    fontSize: "28px",
    color: "#434343",
    fontFamily: "Playfair Display",
    marginBottom: 30,
    marginTop: 30,
    
    [theme.breakpoints.down('md')]: {
      margin: 0,
      fontSize: "16px",
      display: "flex",
      justifyContent: "space-between"
    }
  },
  cardContentDesc: {
    fontSize: "22px",
    color: "#434343",
    fontFamily: "Playfair Display",
    [theme.breakpoints.down('sm')] : {
      display: "none"
    }
  },
  btnBlock: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "auto",
    padding: "8px 30px 50px 30px",
    [theme.breakpoints.down('sm')] : {
      display: "none"
    }
  },
  actionBtn: {
    border: "1px solid #040404",
    borderRadius: "35px",
    minWidth: 200,
    fontSize: "20px",
    textTransform: "capitalize",
    " &:hover": {
      backgroundColor: "#E3B875",
      color: "#ffffff",
      borderColor: "#E3B875"
    },
    " &:last-child": {
      backgroundColor: "#E3B875",
      color: "#ffffff",
      borderColor: "#E3B875"
    } 
  },
  evtTimeMob: {
    [theme.breakpoints.up('sm')] : {
      display: "none"
    }
  }
}));