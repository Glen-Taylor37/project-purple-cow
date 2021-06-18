import React from 'react';
import { Box } from '@material-ui/core';
import { getCount, incrementCount } from '../apis/countApi';
import ButtonCard from './ButtonCard';

const Content = () => {
	const [ count, setCount ] = React.useState(0);

	React.useEffect(() => {
		async function fetchCount() {
			const value = await getCount();
			setCount(value);
		}

		fetchCount();
	}, []);

	async function handleOnFeedClick() {
		await incrementCount();
		const value = await getCount();
		setCount(value);
	}

	return (
		<Box display="flex" flex={1} flexWrap="wrap">
			<ButtonCard />
		</Box>
	);
};

export default Content;
