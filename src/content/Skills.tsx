import * as React from 'react';
import { Atom, Binary, Braces, Building2, Coffee, Database, Hash, Server } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import styles from './Skills.module.css';

const skills = [
	{ label: 'Acumatica ERP', icon: Building2 },
	{ label: 'C# / .NET', icon: Hash },
	{ label: 'SQL / Databases', icon: Database },
	{ label: 'Node.js', icon: Server },
	{ label: 'TypeScript', icon: Braces },
	{ label: 'React', icon: Atom },
	{ label: 'Python', icon: Binary },
	{ label: 'Java', icon: Coffee },
];

export default function Skills() {
	return (
		<section className='section'>
			<div className='container'>
				<SectionHeading>Skills</SectionHeading>
				<div className={styles.grid}>
					{skills.map((skill, i) => (
						<div className={styles.card} key={i}>
							<span className={styles.iconWrap}>
								<skill.icon size={18} />
							</span>
							<span className={styles.label}>{skill.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
