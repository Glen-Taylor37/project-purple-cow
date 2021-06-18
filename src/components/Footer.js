import React from 'react';
import { Box } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';

import { IconButton, Button } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';

// const Copyright = () => {
// 	return (
// 		<Typography variant="body2" align="center">
// 			{'Copyright © Cow'}
// 			{new Date().getFullYear()}
// 			{'.'}
// 		</Typography>
// 	);
// };

const Footer = () => {
	return (
		<Box
			display="flex"
			bgcolor="primary.main"
			maxWidth="sm"
			justifyContent="flex-end"
		>
			<IconButton
				variant="link"
				href="https://twitter.com/fearlessbmore"
				target="_blank"
			>
				<TwitterIcon color="secondary" fontSize="large" />
			</IconButton>
			<IconButton
				variant="link"
				href="https://www.facebook.com/fearlessbmore"
				target="_blank"
			>
				<FacebookIcon color="secondary" fontSize="large" />
			</IconButton>
			<IconButton
				variant="link"
				href="https://www.instagram.com/fearlessbmore/"
				target="_blank"
			>
				<InstagramIcon color="secondary" fontSize="large" />
			</IconButton>
			<IconButton
				variant="link"
				href="https://www.linkedin.com/company/fearlessbmore/"
				target="_blank"
			>
				<LinkedInIcon color="secondary" fontSize="large" />
			</IconButton>
		</Box>
	);
};

export default Footer;
