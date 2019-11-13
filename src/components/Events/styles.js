import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    display: "flex"
  },
  info: {
    height: "100%",
    width: "100%"
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));
