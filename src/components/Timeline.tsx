import React from 'react';
import type { LucideIcon } from 'lucide-react';
import ExpandableDetail from './ExpandableDetail';
import styles from './Timeline.module.css';

export type TimelineTag = {
	label: string;
	title?: string;
};

export type TimelineMeta = {
	icon: LucideIcon;
	label: string;
};

export function Timeline({ children }: { children: React.ReactNode }) {
	return <ol className={styles.timeline}>{children}</ol>;
}

type TimelineEntryProps = {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	current?: boolean;
	title: string;
	href?: string;
	meta?: TimelineMeta[];
	dateLabel?: string;
	tags?: TimelineTag[];
	children?: React.ReactNode;
};

export function TimelineEntry({ icon: Icon, current, title, href, meta, dateLabel, tags, children }: TimelineEntryProps) {
	return (
		<li className={styles.entry}>
			<div className={styles.dateAside}>{dateLabel}</div>
			<div className={styles.markerCol}>
				<div className={current ? `${styles.marker} ${styles.markerCurrent}` : styles.marker}>
					<Icon width={30} height={30} />
				</div>
				<div className={styles.connector} />
			</div>
			<div className={styles.content}>
				<h3 className={styles.title}>
					{href ? (
						<a href={href} target='_blank' rel='noreferrer'>
							{title}
						</a>
					) : (
						title
					)}
				</h3>
				{dateLabel && <div className={styles.dateInline}>{dateLabel}</div>}
				{meta &&
					meta.map((m, i) => (
						<div className={styles.metaRow} key={i}>
							<m.icon size={14} />
							<span>{m.label}</span>
						</div>
					))}
				{tags && tags.length > 0 && (
					<div className={styles.tags}>
						{tags.map((tag, i) => (
							<span key={i} className={styles.tag} title={tag.title}>
								{tag.label}
							</span>
						))}
					</div>
				)}
				{children && <ul className={styles.subList}>{children}</ul>}
			</div>
		</li>
	);
}

type TimelineSubEntryProps = {
	title: string;
	current?: boolean;
	dateLabel: string;
	tooltip?: string;
	detail?: React.ReactNode;
};

export function TimelineSubEntry({ title, current, dateLabel, tooltip, detail }: TimelineSubEntryProps) {
	return (
		<li className={styles.subEntry}>
			<div className={styles.subMarkerCol}>
				<div className={current ? `${styles.subDot} ${styles.subDotCurrent}` : styles.subDot} />
				<div className={styles.subConnector} />
			</div>
			<div className={styles.subContent}>
				{detail ? <ExpandableDetail label={title}>{detail}</ExpandableDetail> : <div className={styles.subTitle}>{title}</div>}
				<span className={styles.subDate} title={tooltip}>
					{dateLabel}
				</span>
			</div>
		</li>
	);
}
