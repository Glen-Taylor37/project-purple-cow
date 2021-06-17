import React from 'react';
import { Grid, Box, Paper, Typography } from '@material-ui/core';

import CountButton from './CountButton';

const Content = () => {
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
					<CountButton />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Content;
