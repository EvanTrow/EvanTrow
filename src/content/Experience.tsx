import * as React from 'react';
import moment from 'moment';
import { Globe, MapPin } from 'lucide-react';

import { Timeline, TimelineEntry, TimelineSubEntry } from '../components/Timeline';
import SectionHeading from '../components/SectionHeading';
import { CrestwoodIcon, SLTechnologyIcon, DenverWholesaleFoodsIcon, CocalicoIcon, ConradCompanyIcon } from '../components/SvgIcons';

const prettyDate = require('pretty-date-duration');

const experience = [
	{
		company: 'Crestwood Associates',
		site: 'https://www.crestwood.com',
		logo: CrestwoodIcon,
		location: 'Remote',
		type: 'Full-time',
		start: '09/26/2022',
		end: null,
		positions: [
			{
				title: 'Acumatica Developer',
				start: '04/13/2023',
				end: null,
				details: (
					<ul>
						<li>
							Collaboration with management to identify end-user requirements. Leading design/discovery sessions to define scope and provide estimates all the way to final development
							and delivery with the client.
						</li>
						<li>Produce efficient and elegant code based on requirements.</li>
						<li>Test and deploy software.</li>
						<li>Troubleshoot, debug, maintain, and improve software.</li>
						<li>Technical documentation to guide future software development.</li>
					</ul>
				),
			},
			{
				title: 'Junior Acumatica Developer',
				start: '09/26/2022',
				end: '04/13/2023',
				details: undefined,
			},
		],
	},
	{
		company: 'The Conrad Company',
		site: 'https://tccholdings.com',
		logo: ConradCompanyIcon,
		location: 'York, Pennsylvania',
		type: 'Full-time',
		start: '07/09/2020',
		end: '09/12/2022',
		positions: [
			{
				title: 'Systems Engineer',
				start: '07/15/2022',
				end: '09/12/2022',
				details: (
					<>
						<h4>ERP Management</h4>
						<ul>
							<li>Communicate and implement third party vendor solutions to provide additional functionality.</li>
							<li>Test updates, manage changes, and roll-out updates while working with internal decision makers to ensure business continuity.</li>
							<li>Create training, documentation, workflows, and/or customizations to address end user pain points and inefficiencies.</li>
						</ul>
						<h4>Application Development</h4>
						<ul>
							<li>Collaborate with end users to create custom applications to meet business needs.</li>
							<li>Work with co-workers in an agile development setting.</li>
							<li>Use Git to manage versions, branches, and enhance collaboration.</li>
							<li>Develop software as needed using React, Node.JS, PowerShell, C#</li>
						</ul>
						<h4>Additional</h4>
						<ul>
							<li>Deploy, maintain, and troubleshoot on-site servers and networking equipment, Azure services.</li>
							<li>Assist users both on-site and remote. Maintain, log, and troubleshoot tickets.</li>
						</ul>
					</>
				),
			},
			{
				title: 'Systems Analyst',
				start: '07/09/2020',
				end: '07/15/2022',
				details: undefined,
			},
		],
	},
	{
		company: 'SL Technology',
		site: 'https://sltechnology.net',
		logo: SLTechnologyIcon,
		location: 'New Holland, Pennsylvania',
		type: 'Full-time',
		start: '04/08/2019',
		end: '07/09/2020',
		positions: [
			{
				title: 'Systems Engineer',
				start: '04/08/2019',
				end: '07/09/2020',
				details: (
					<ul>
						<li>Troubleshoot and diagnose technical issues with hardware and software.</li>
						<li>Install new systems, CAT5 wiring and equipment.</li>
						<li>Develop custom software as needed. (Web apps and C# SQL connectors).</li>
					</ul>
				),
			},
		],
	},
	{
		company: 'Denver Wholesale Foods',
		site: 'https://www.denverfoods.net',
		logo: DenverWholesaleFoodsIcon,
		location: 'Ephrata, Pennsylvania',
		type: 'Part-time',
		start: '05/25/2018',
		end: '04/08/2019',
		positions: [
			{
				title: 'System Administrator',
				start: '05/25/2018',
				end: '04/08/2019',
				details: (
					<ul>
						<li>Manage all workstations and mobile devices.</li>
						<li>Set up and manage VMware ESXi.</li>
						<li>Set up new users and manage email accounts in Exchange Server.</li>
						<li>Configured IPs, ports, NAT, firewall, and VPN in router.</li>
						<li>Troubleshoot workstations, servers, and network.</li>
						<li>Manage and develop an e-commerce website.</li>
					</ul>
				),
			},
		],
	},
	{
		company: 'Cocalico School District',
		site: 'https://www.cocalico.org',
		logo: CocalicoIcon,
		location: 'Denver, Pennsylvania',
		type: 'Part-time',
		start: '06/01/2016',
		end: '04/08/2019',
		positions: [
			{
				title: 'Technology Support',
				start: '08/22/2018',
				end: '04/08/2019',
				details: (
					<ul>
						<li>Worked with team to etch asset numbers, image, and set up logins for 2,500 laptops and 500 computers.</li>
						<li>Sanitized and updated software for computers, projectors, and printers.</li>
					</ul>
				),
			},
			{
				title: 'IT Assistant (June — August)',
				start: '06/01/2016',
				end: '08/22/2018',
				details: undefined,
			},
		],
	},
];

export default function Experience() {
	return (
		<section className='section'>
			<div className='container'>
				<SectionHeading>Experience</SectionHeading>
				<Timeline>
					{experience.map((exp, expIndex) => (
						<TimelineEntry
							key={expIndex}
							icon={exp.logo}
							current={exp.end === null}
							title={exp.company}
							href={exp.site}
							meta={[{ icon: exp.location.toLowerCase().includes('remote') ? Globe : MapPin, label: exp.location }]}
							dateLabel={`${moment(exp.start).format('MMM YYYY')} - ${exp.end ? moment(exp.end).format('MMM YYYY') : 'Present'}`}
							tags={[{ label: exp.type }, { label: getPrettyDuration(exp.start, exp.end), title: prettyDate(exp.start, exp.end) }]}
						>
							{exp.positions.map((pos, posIndex) => (
								<TimelineSubEntry
									key={posIndex}
									title={pos.title}
									current={pos.end === null}
									dateLabel={getPrettyDuration(pos.start, pos.end)}
									tooltip={prettyDate(pos.start, pos.end)}
									detail={pos.details}
								/>
							))}
						</TimelineEntry>
					))}
				</Timeline>
			</div>
		</section>
	);
}

function getPrettyDuration(start: string, end: string | null): string {
	if (!end) {
		end = moment().format('MM/DD/YYYY');
	}

	let years = moment.duration(moment(end).diff(start)).asYears();

	let months = Math.round(moment.duration(moment.duration(moment(end).diff(start)).asYears() - parseInt(moment.duration(moment(end).diff(start)).asYears().toString()), 'years').asMonths());

	if (years >= 1 && months > 0) {
		return `${Math.floor(years)} year${years > 1 ? 's' : ''} ${months} month${months > 1 ? 's' : ''}`;
	}

	if (years < 1 && months > 0) {
		return `${Math.floor(months)} month${months > 1 && 's'}`;
	}

	if (years >= 1 && months === 0) {
		return `${Math.floor(years)} year${years > 1 ? 's' : ''}`;
	}

	return `Invalid Date`;
}
