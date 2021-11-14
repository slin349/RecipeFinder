import React, { useState } from 'react';
import { Grid, Autocomplete, TextField } from "@mui/material";
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
	const [value, setValue] = useState('');
	const [ingredients, setIngredients] = useState([]);
	return (
		<Grid container className={classes.pageContainer}>
			<Grid item xs/>
			<Grid item xs={8} style={{backgroundColor: 'lightgrey'}}>
				<Autocomplete 
					freeSolo 
					fullWidth 
					options={['apple', 'banana', 'pear']} 
					renderInput={(params) => <TextField {...params} label="add your ingredient" />}
					value={value}
					onChange={(event, newInputValue) => {
						setValue(newInputValue);
						if ((event.code === 'Enter' && event.type === 'keydown') || (event.type === 'click')) {
							event.defaultMuiPrevented = true;
							if (ingredients.indexOf(newInputValue) === -1) {
								setIngredients(prevIngredients => [...prevIngredients, newInputValue]);
							}
						}
					}}
				/>
				{ingredients.map((item, index) => (
					<div key={index}>{item}</div>
				))}
				<StickyNote />
			</Grid>
			<Grid item xs/>
		</Grid>
	)
}

export default Fridge;