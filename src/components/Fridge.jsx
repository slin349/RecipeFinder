import React, { useState } from 'react';
import { Grid, Autocomplete, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StickyNote from "./StickyNote";
import Chip from '@mui/material/Chip';

const useStyles = makeStyles({
	pageContainer: {
		height: '100vh',
		padding: '2rem 0rem',
	},
	chip: {
		border: '0.15rem solid white',
		margin: '1rem 2rem 1rem 0rem',
		borderRadius: '0rem',
		'& span' : {
			margin: '0rem 1rem',
		}
	},
	contentContainer: {
		padding: '2rem 0rem 0rem 2rem',
	},
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
			<Grid container item xs={8} style={{backgroundColor: 'lightgrey'}}>
				<Grid item xs={8} className={classes.contentContainer}>
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
						<Chip label={item} variant="outlined" onDelete={() => handleDelete(item)} className={classes.chip} />
					))}
				</Grid>
				<Grid item xs={4}>
					
				</Grid>
				<StickyNote />
			</Grid>
			<Grid item xs/>
		</Grid>
	)
}

export default Fridge;