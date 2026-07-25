import React from 'react';
import { useCookies } from 'react-cookie';

export default function useDarkMode() {
	const [cookies, setCookie] = useCookies(['darkmode']);

	const [darkMode, setDarkMode] = React.useState<boolean>(() => {
		if (cookies.darkmode === undefined) {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		}
		return cookies.darkmode === 'true' || cookies.darkmode === true;
	});

	React.useEffect(() => {
		document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
	}, [darkMode]);

	const toggle = React.useCallback(() => {
		setDarkMode((prev) => {
			const next = !prev;
			setCookie('darkmode', next, { path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' });
			return next;
		});
	}, [setCookie]);

	return { darkMode, toggle };
}
