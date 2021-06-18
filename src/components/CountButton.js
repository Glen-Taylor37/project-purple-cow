import React from 'react';
import { Button } from '@material-ui/core';
import { incrementCount, getCount } from '../apis/countApi';

const CountButton = (props) => {
	return (
		<Button onClick={() => incrementCount()} variant="contained" color="primary">
			Click Me
		</Button>
	);
};

export default CountButton;
