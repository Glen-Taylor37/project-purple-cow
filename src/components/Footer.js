import React from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

//import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';

const Copyright = () => {
	return (
		<Typography variant="body2" align="center">
			{'Copyright © Cow'}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

const Footer = () => {
	return (
		<Box bgcolor="primary.main" maxWidth="sm">
			<Copyright />
		</Box>
	);
};

export default Footer;
