import React, { useState } from 'react';
import { Grid, Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	pageContainer: {
		height: '100vh',
		marginTop: '20px'
	}
});

function Fridge(props) {
	const classes = useStyles();
	const [value, setValue] = useState('');
	const [ingredients, setIngredients] = useState([]);
	return (
		<div>
			<Grid container className={classes.pageContainer}>
				<Grid xs/>
				<Grid xs={8} style={{backgroundColor: 'lightgrey'}}>
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
								setIngredients(prevIngredients => [...prevIngredients, newInputValue]);
							}
						}}
					/>
					{ingredients.map((item, index) => (
						<div key={index}>{item}</div>
					))}
				</Grid>
				<Grid xs/>
			</Grid>
		</div>
	)
}

export default Fridge;