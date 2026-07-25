import * as React from 'react';
import { Atom, Binary, Braces, Coffee, Database, Hash, Server } from 'lucide-react';

import SectionHeading from '../components/SectionHeading';
import { AcumaticaIcon } from '../components/SvgIcons';
import styles from './Skills.module.css';

type Skill = {
	label: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const skills: Skill[] = [
	{ label: 'Acumatica ERP', icon: AcumaticaIcon },
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
								<skill.icon width={18} height={18} />
							</span>
							<span className={styles.label}>{skill.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
