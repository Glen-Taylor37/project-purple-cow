import React from 'react';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { getCount, incrementCount } from '../apis/countApi';

const Content = () => {
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
		<Box flex={1}>
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
				flex={1}
				height="100%"
			>
				<Grid item xs={3}>
					<Typography variant="h5" align="center">
						Our priority is feeding the cows.
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Box bgcolor="primary.main">{`${count}`}</Box>
				</Grid>
				<Grid item xs={3}>
					<Button
						onClick={() => handleOnClick()}
						variant="contained"
						color="primary"
					>
						Click Me
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Content;
