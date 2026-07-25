import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './ExpandableDetail.module.css';

type ExpandableDetailProps = {
	label: React.ReactNode;
	children: React.ReactNode;
};

export default function ExpandableDetail({ label, children }: ExpandableDetailProps) {
	const [open, setOpen] = React.useState(false);
	const panelId = React.useId();

	return (
		<div className={styles.wrapper}>
			<button type='button' className={styles.trigger} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((o) => !o)}>
				{label}
				<ChevronDown size={16} className={open ? `${styles.chevron} ${styles.chevronOpen}` : styles.chevron} />
			</button>
			<div id={panelId} className={styles.panel} style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
				<div className={styles.panelInner}>{children}</div>
			</div>
		</div>
	);
}
