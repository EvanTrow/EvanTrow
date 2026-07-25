import * as React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

import { Timeline, TimelineEntry } from '../components/Timeline';
import SectionHeading from '../components/SectionHeading';
import { CocalicoIcon, StevensCollegeIcon } from '../components/SvgIcons';

const education = [
	{
		school: 'Thaddeus Stevens College of Technology',
		degree: 'Computer and Network Systems Administration',
		site: 'https://stevenscollege.edu',
		logo: StevensCollegeIcon,
		location: 'Lancaster, Pennsylvania',
		start: '2018',
		end: '2020',
	},
	{
		school: 'Cocalico High School',
		degree: 'High School Diploma',
		site: 'https://www.cocalico.org',
		logo: CocalicoIcon,
		location: 'Denver, Pennsylvania',
		start: '2014',
		end: '2018',
		hideDates: true,
	},
];

export default function Education() {
	return (
		<section className='section'>
			<div className='container'>
				<SectionHeading>Education</SectionHeading>
				<Timeline>
					{education.map((edu, eduIndex) => (
						<TimelineEntry
							key={eduIndex}
							icon={edu.logo}
							title={edu.school}
							href={edu.site}
							dateLabel={edu.hideDates ? undefined : `${edu.start} - ${edu.end ? edu.end : 'Present'}`}
							meta={[
								{ icon: GraduationCap, label: edu.degree },
								{ icon: MapPin, label: edu.location },
							]}
						/>
					))}
				</Timeline>
			</div>
		</section>
	);
}
