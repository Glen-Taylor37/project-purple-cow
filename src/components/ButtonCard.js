import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { getCount, incrementCount } from '../apis/countApi';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	grid     : {
		backgroundColor : '#fff'
	},
	button   : {
		backgroundColor : '#5c3977',
		position        : 'relative',
		'&:hover'       : {
			backgroundColor : '#ee5340'
		},
		marginTop       : '10px'
	},
	mainText : {
		marginBottom : '-10px'
	},
	text     : {
		color : '#ee5340'
	}
});

const ButtonCard = () => {
	const classes = useStyles();
	const [ count, setCount ] = React.useState(0);

	React.useEffect(() => {
		async function fetchCount() {
			const value = await getCount();
			setCount(value);
		}

		fetchCount();
	}, []);

	async function handleOnClick() {
		await incrementCount();
		const value = await getCount();
		setCount(value);
	}

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			flex={1}
			width="100%"
		>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				className={classes.grid}
			>
				<Grid item>
					<Box alignItems="center">
						<Typography
							className={(classes.mainText, classes.text)}
							align="center"
							color="secondary.main"
							variant="h4"
						>
							{`${count}`}
						</Typography>
						<Typography
							className={classes.text}
							align="center"
							color="secondary.main"
							variant="h6"
						>
							cows fed
						</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Button
						onClick={() => handleOnClick()}
						variant="contained"
						color="primary"
						size="large"
						className={classes.button}
					>
						FEED COWS
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ButtonCard;
