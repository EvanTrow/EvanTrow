import React from 'react';
import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
	children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
	return (
		<div className={styles.heading}>
			<h2 className={styles.title}>{children}</h2>
			<div className={styles.rule} />
		</div>
	);
}
