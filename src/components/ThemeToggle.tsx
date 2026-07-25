import React from 'react';
import { Moon, Sun } from 'lucide-react';
import styles from './ThemeToggle.module.css';

type ThemeToggleProps = {
	darkMode: boolean;
	onToggle: () => void;
};

export default function ThemeToggle({ darkMode, onToggle }: ThemeToggleProps) {
	return (
		<button
			type='button'
			className={styles.toggle}
			onClick={onToggle}
			aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
			title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
		>
			{darkMode ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
		</button>
	);
}
