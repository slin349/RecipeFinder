import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	pageContainer: {
		height: '100vh',
		marginTop: '20px'
	}
});

function Fridge(props) {
	const classes = useStyles();
	return (
		<div>
			<Grid container className={classes.pageContainer}>
				<Grid xs/>
				<Grid xs={8} style={{backgroundColor: 'grey'}}>
					test
				</Grid>
				<Grid xs/>
			</Grid>
		</div>
	)
}

export default Fridge;