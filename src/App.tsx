import React from 'react';

import ThemeToggle from './components/ThemeToggle';
import { ToastProvider } from './components/Toast';
import useDarkMode from './hooks/useDarkMode';

import Header from './content/Header';
import Experience from './content/Experience';
import Education from './content/Education';
import Skills from './content/Skills';

import styles from './App.module.css';

function App() {
	const { darkMode, toggle } = useDarkMode();

	return (
		<>
			<ThemeToggle darkMode={darkMode} onToggle={toggle} />

			<Header />
			<Experience />
			<Education />
			<Skills />

			<footer className={styles.footer}>
				<div className='container'>
					<p>© {new Date().getFullYear()} Evan Trowbridge</p>
				</div>
			</footer>
		</>
	);
}

export default function Root() {
	return (
		<ToastProvider>
			<App />
		</ToastProvider>
	);
}
