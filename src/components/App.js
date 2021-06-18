import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const mainTheme = createMuiTheme({
	palette : {
		primary   : {
			light        : '#ae52d4',
			main         : '#5c3977',
			dark         : '#4a0072',
			contrastText : '#fff'
		},
		secondary : {
			light        : '#ff866c',
			main         : '#ee5340',
			dark         : '#b51917',
			contrastText : '#fff'
		}
	}
});

mainTheme.typography.h4 = {
	fontSize                           : '1.2rem',
	'@media (min-width:600px)'         : {
		fontSize : '2rem'
	},
	[mainTheme.breakpoints.down('xs')]: {
		fontSize : '1.5rem'
	},
	[mainTheme.breakpoints.up('md')]: {
		fontSize : '3rem'
	},
	[mainTheme.breakpoints.up('xl')]: {
		fontSize : '4rem'
	}
};

mainTheme.typography.h5 = {
	fontSize                           : '1.1rem',
	'@media (min-width:600px)'         : {
		fontSize : '1.3rem'
	},
	[mainTheme.breakpoints.down('xs')]: {
		fontSize : '.8rem'
	},
	[mainTheme.breakpoints.up('md')]: {
		fontSize : '2.5rem'
	},
	[mainTheme.breakpoints.up('xl')]: {
		fontSize : '3.5rem'
	}
};

const useStyles = makeStyles(() => ({
	body           : {
		width           : '100%',
		height          : '100%',
		backgroundImage : `url('pexels-fwstudio-131634.jpg')`
	},
	root           : {
		width  : '100%',
		height : '100%'
	},
	paperContainer : {
		backgroundImage : `url(${<img src={'pexels-fwstudio-131634.jpg'} />})`
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={mainTheme}>
			<CssBaseline>
				<Box
					height="100vh"
					display="flex"
					flexDirection="column"
					className={classes.body}
				>
					<Header />
					<Content />
					<Footer />
				</Box>
			</CssBaseline>
		</ThemeProvider>
	);
};

export default App;
