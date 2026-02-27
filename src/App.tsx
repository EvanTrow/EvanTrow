import React from 'react';
import { useCookies } from 'react-cookie';
import { SnackbarProvider } from 'notistack';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { CssBaseline, IconButton, Tooltip } from '@mui/material';

import Header from './content/Header';
import Experience from './content/Experience';
import Education from './content/Education';

function App() {
	const [cookies, setCookie] = useCookies(['darkmode']);
	const [darkMode, setDarkmode] = React.useState<boolean>(cookies.darkmode === 'true' ? true : false);

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: darkMode ? 'dark' : 'light',

					primary: {
						light: '#87faff',
						main: '#4ac7f1',
						dark: '#0096be',
						contrastText: '#ffffff',
					},
					secondary: {
						light: '#ab6bf0',
						main: '#783dbd',
						dark: '#450b8c',
						contrastText: '#ffffff',
					},
				},
			}),
		[darkMode],
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Tooltip title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
				<IconButton
					sx={{ position: 'absolute', top: 8, right: 8 }}
					size='small'
					onClick={() => {
						setDarkmode(!darkMode);
						setCookie('darkmode', !darkMode);
					}}
				>
					{darkMode ? <LightModeIcon /> : <DarkModeOutlinedIcon />}
				</IconButton>
			</Tooltip>

			<Header />
			<Experience />
			<Education />
			{/* <Skills /> */}
		</ThemeProvider>
	);
}

export default function IntegrationNotistack() {
	return (
		<SnackbarProvider maxSnack={3}>
			<App />
		</SnackbarProvider>
	);
}
