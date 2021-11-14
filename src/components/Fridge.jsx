import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StickyNote from "./StickyNote";

const useStyles = makeStyles({
	pageContainer: {
		height: '100vh',
		padding: '2rem 0rem',
	}
});

function Fridge() {
	const classes = useStyles();
	return (
		<Grid container className={classes.pageContainer}>
			<Grid item xs/>
			<Grid item xs={6} style={{backgroundColor: 'grey'}}>
				<StickyNote />
			</Grid>
			<Grid item xs/>
		</Grid>
	)
}

export default Fridge;