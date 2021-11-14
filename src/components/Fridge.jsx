import React, { useState } from 'react';
import { Grid, Autocomplete, TextField, Button } from "@mui/material";
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

	const getRecipesByIngredients = () => {
		const axios = require("axios").default;

		let url = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=";

		ingredients.forEach(ingredient => url += ingredient + ",");

		url += "&apiKey=a5d95ac3b32a423c976648d39c99f694"

		var options = {
			method: 'GET',
			url: url,
			params: {
			  number: '5',
			  type: 'main course'
			}
		  };

		axios.request(options)
			.then(function (response) 
			{
				let ids = [];
				let titles = [];
				console.log(response.data);
				response.data.forEach(res => {
					ids.push(res.id);
					titles.push(res.title);
				});
				console.log(ids)
				console.log(titles)
			})
			.catch(function (error) 
			{
				console.error(error);
			});
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
			<Button
				onClick={getRecipesByIngredients}
			>
				Test
			</Button>
		</Grid>
	)
}

export default Fridge;