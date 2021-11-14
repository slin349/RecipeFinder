import React, { useState } from 'react';
import { Grid, Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StickyNote from "./StickyNote";
import Chip from '@mui/material/Chip';

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
	const handleDelete = (ingredientToDelete) => {
		setIngredients((ingredients) => ingredients.filter((ingredient) => ingredient !== ingredientToDelete));
	}

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
							setIngredients(prevIngredients => [...prevIngredients, newInputValue]);
						}
					}}
				/>
				{ingredients.map((item, index) => (
					<Chip label={item} variant="outlined" onDelete={() => handleDelete(item)} />
				))}
				<StickyNote />
			</Grid>
			<Grid item xs/>
		</Grid>
	)
}

export default Fridge;