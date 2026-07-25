import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Briefcase, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

import { useToast } from '../components/Toast';
import { isLikelyBot } from '../utils/botDetection';
import { getEmail, getPhoneDigits, getPhoneDisplay } from '../utils/contact';
import { getRecaptchaToken } from '../utils/recaptcha';
import styles from './Header.module.css';

export default function Header() {
	const showToast = useToast();
	const [isBot, setIsBot] = useState(() => isLikelyBot());

	useEffect(() => {
		// Already flagged by the synchronous heuristics — no need to spend a
		// network round trip confirming it.
		if (isBot) return;

		let cancelled = false;
		getRecaptchaToken('view_contact').then((token) => {
			if (!cancelled && !token) setIsBot(true);
		});
		return () => {
			cancelled = true;
		};
	}, [isBot]);

	return (
		<header className={styles.hero}>
			<div className={styles.glow} aria-hidden='true' />
			<div className={`container ${styles.inner}`}>
				<div className={styles.avatarRing}>
					<img className={styles.avatar} alt='Evan Trowbridge' src='https://avatars.githubusercontent.com/u/20376151' width={112} height={112} />
				</div>

				<h1 className={styles.name}>Evan Trowbridge</h1>

				<div className={styles.metaList}>
					<div className={styles.metaRow}>
						<Briefcase size={16} />
						<span>
							Acumatica Developer at{' '}
							<a className={styles.metaLink} href='https://www.crestwood.com' target='_blank' rel='noreferrer'>
								Crestwood Associates
							</a>
						</span>
					</div>
					<div className={styles.metaRow}>
						<MapPin size={16} />
						<span>Lancaster, Pennsylvania</span>
					</div>
				</div>

				<p className={styles.bio}>
					I've been developing professional and personal software for over {moment().diff('2014-07-15', 'years')} years and working in Information Technology for over{' '}
					{moment().diff('2016-06-15', 'years')} years. I am always learning new technologies and updating myself on the latest tech trends.
				</p>

				{!isBot && (
					<div className={styles.actions}>
						<CopyToClipboard text={getEmail()} onCopy={() => showToast('Copied to clipboard')}>
							<button type='button' className={styles.pillButton} title='Copy to clipboard'>
								<Mail size={16} />
								{getEmail()}
							</button>
						</CopyToClipboard>
						<CopyToClipboard text={getPhoneDigits()} onCopy={() => showToast('Copied to clipboard')}>
							<button type='button' className={styles.pillButton} title='Copy to clipboard'>
								<Phone size={16} />
								{getPhoneDisplay()}
							</button>
						</CopyToClipboard>
					</div>
				)}

				<div className={styles.social}>
					<a className={styles.iconButton} href='https://www.linkedin.com/in/EvanTrow/' target='_blank' rel='noreferrer' aria-label='LinkedIn' title='LinkedIn'>
						<Linkedin size={18} />
					</a>
					<a className={styles.iconButton} href='https://github.com/EvanTrow' target='_blank' rel='noreferrer' aria-label='GitHub' title='GitHub'>
						<Github size={18} />
					</a>
				</div>
			</div>
		</header>
	);
}
