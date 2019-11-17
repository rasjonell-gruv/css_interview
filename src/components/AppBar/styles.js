import { makeStyles } from "@material-ui/core/styles";
import { fontFamily } from "@material-ui/system";

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  headerBar: {
    backgroundColor: '#000000',
    padding: "10px 0",
    [theme.breakpoints.down('sm')] : {
      padding: "5px 0"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize:"52px",
    fontFamily: "Playfair Display",
    [theme.breakpoints.down('sm')] : {
      fontSize: "32px"
    }
  },
  name: {
    fontFamily: "LucidaGrande",
    fontSize: "18px",
    [theme.breakpoints.down('sm')] : {
      fontSize: "10px",
    }
  },
  menus:{
    fontSize: "20px",
    [theme.breakpoints.down('sm')] : {
      display: "none"
    }
  },
  burgerMenu: {
    [theme.breakpoints.up('md')] : {
      display: "none"
    }
  }
}));
