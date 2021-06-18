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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	icon       : {
		color     : '#fff',
		position  : 'relative',
		'&:hover' : {
			color : '#5c3977'
		}
	},
	iconButton : {
		'&:hover' : {
			backgroundColor : 'inherit'
		}
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<Box
			display="flex"
			bgcolor="primary.main"
			maxWidth="sm"
			justifyContent="flex-end"
		>
			<Box display="flex" bgcolor="secondary.main" maxWidth="sm">
				<IconButton
					variant="link"
					href="https://twitter.com/fearlessbmore"
					target="_blank"
					className={classes.iconButton}
				>
					<TwitterIcon
						color="secondary"
						fontSize="large"
						className={classes.icon}
					/>
				</IconButton>
				<IconButton
					variant="link"
					href="https://www.facebook.com/fearlessbmore"
					target="_blank"
					className={classes.iconButton}
				>
					<FacebookIcon
						color="secondary"
						fontSize="large"
						className={classes.icon}
					/>
				</IconButton>
				<IconButton
					variant="link"
					href="https://www.instagram.com/fearlessbmore/"
					target="_blank"
					className={classes.iconButton}
				>
					<InstagramIcon
						color="secondary"
						fontSize="large"
						className={classes.icon}
					/>
				</IconButton>
				<IconButton
					variant="link"
					href="https://www.linkedin.com/company/fearlessbmore/"
					target="_blank"
					className={classes.iconButton}
				>
					<LinkedInIcon
						color="action"
						fontSize="large"
						className={classes.icon}
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default Footer;
