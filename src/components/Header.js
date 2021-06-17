import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Header = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h4">Project Purple Cow</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
