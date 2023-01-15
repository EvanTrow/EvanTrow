import React from 'react';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/material/styles';

import { isMobile } from 'react-device-detect';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Box, Container, Grid, Avatar, Typography, Link, Stack, IconButton, Tooltip, Button } from '@mui/material';

import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';

import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedInIcon } from '../components/SvgIcons';

export default function App() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const theme = useTheme();

	const showCopied = () => {
		enqueueSnackbar('Copied to clipboard', {
			variant: 'success',
			action: (key) => (
				<>
					<IconButton
						aria-label='close'
						size='small'
						sx={{
							color: 'primary.contrastText',
						}}
						onClick={() => closeSnackbar(key)}
					>
						<CloseIcon />
					</IconButton>
				</>
			),
		});
	};

	return (
		<Box
			sx={{
				width: '100%',
				padding: isMobile ? 1 : 6,
				backgroundColor: theme.palette.mode == 'light' ? 'primary.main' : 'primary.dark',
				color: 'primary.contrastText',
			}}
		>
			<Container>
				<Grid container spacing={2}>
					<Grid item sm={12} md={5} lg={4}>
						<Avatar alt='Evan Trowbridge' src='https://avatars.githubusercontent.com/u/20376151' sx={{ width: 128, height: 128, marginBottom: 1 }} />
						<Typography variant='h4' noWrap>
							Evan Trowbridge
						</Typography>
						<Grid container mt={1}>
							<Grid item mr={1}>
								<BusinessIcon />
							</Grid>
							<Grid item xs>
								<Typography variant='body1'>
									Junior Acumatica Developer at{' '}
									<Link
										sx={{
											color: 'primary.contrastText',
											textDecoration: 'none',
										}}
										href='https://www.crestwood.com'
										target='_blank'
										noWrap
									>
										Crestwood Associates
									</Link>
								</Typography>
							</Grid>
						</Grid>
						<Grid container mt={1}>
							<Grid item mr={1}>
								<PlaceIcon />
							</Grid>
							<Grid item xs>
								<Typography variant='body1'>York, Pennsylvania</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item sm={12} md={7} lg={8}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<Typography>
									I've been developing professional and personal software for over {moment().diff('2014/07/15', 'years')} years and working in Information Technology for over{' '}
									{moment().diff('2016/06/15', 'years')} years. I am always learning new technologies and updating myself on the latest tech trends.
								</Typography>
							</Grid>

							<Grid item xs={12}>
								<Stack direction='row' spacing={1}>
									<Tooltip title='LinkedIn'>
										<IconButton color='inherit' component={Link} href='https://www.linkedin.com/in/EvanTrow/' target='_blank'>
											<LinkedInIcon />
										</IconButton>
									</Tooltip>
									<Tooltip title='Github'>
										<IconButton color='inherit' component={Link} href='https://github.com/EvanTrow' target='_blank'>
											<GitHubIcon />
										</IconButton>
									</Tooltip>
								</Stack>
							</Grid>

							<Grid item xs={12}>
								<CopyToClipboard text='evan@trowbridge.tech' onCopy={showCopied}>
									<Tooltip title='Copy to clipboard' placement='right'>
										<Button variant='outlined' color='inherit' startIcon={<MailIcon />} sx={{ borderRadius: 20 }}>
											evan@trowbridge.tech
										</Button>
									</Tooltip>
								</CopyToClipboard>
							</Grid>
							<Grid item xs={12}>
								<CopyToClipboard text='17173050783' onCopy={showCopied}>
									<Tooltip title='Copy to clipboard' placement='right'>
										<Button variant='outlined' color='inherit' startIcon={<PhoneIcon />} sx={{ borderRadius: 20 }}>
											+1 717-305-0783
										</Button>
									</Tooltip>
								</CopyToClipboard>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
