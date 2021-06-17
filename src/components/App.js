import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { purple, white } from '@material-ui/core/colors';

const mainTheme = createMuiTheme({
	palette : {
		primary   : {
			light        : '#ae52d4',
			main         : '#7b1fa2',
			dark         : '#4a0072',
			contrastText : '#fff'
		},
		secondary : {
			light        : '#ae52d4',
			main         : '#fff',
			dark         : '#7b1fa2',
			contrastText : '#000'
		}
	}
});

const useStyles = makeStyles(() => ({
	body : {
		width  : '100%',
		height : '100%'
	},
	root : {
		width  : '100%',
		height : '100%'
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<CssBaseline style={{ height: '90vh' }}>
			<ThemeProvider theme={mainTheme}>
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
			</ThemeProvider>
		</CssBaseline>
	);
};

export default App;
