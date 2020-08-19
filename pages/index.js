// core
import { useDispatch } from "react-redux";

// mui
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

// module
import Clock from "../src/components/clock";
import Counter from "../src/components/counter";
import useInterval from "../lib/useInterval";
import Link from "../src/Link";
import { tick } from "../lib/slices/clockSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    // width: 100,
    width: "40%",
    display: "flex",
    justifyContent: "centet",
    flexDirection: "column",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const IndexPage = () => {
  const dispatch = useDispatch();
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }));
  }, 1000);
  const classes = useStyles();

  return (
    <Grid item container justify="center" alignContent="column">
      <Paper className={classes.paper}>
        <div style={{ textAlign: "center" }}>
          <Link href="/about" color="secondary">
            Go to the Second page
          </Link>
        </div>
        <Clock />
        <Counter />
      </Paper>
    </Grid>
  );
};

export default IndexPage;
