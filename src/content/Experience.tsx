import * as React from 'react';
import moment from 'moment';
import { isMobile } from 'react-device-detect';

import { styled, useTheme } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Chip, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';

import PlaceIcon from '@mui/icons-material/Place';
import PublicIcon from '@mui/icons-material/Public';
import { CrestwoodIcon, PennAirIcon, SLTechnologyIcon, DenverWholesaleFoodsIcon, CocalicoIcon } from '../components/SvgIcons';
import Tooltip from '@mui/material/Tooltip';
import PositionDialog from './PositionDialog';

const prettyDate = require('pretty-date-duration');

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
	backgroundColor: theme.palette.mode == 'light' ? theme.palette.primary.main : theme.palette.primary.dark,
	boxShadow: '0',
	'&::after': {
		position: 'absolute',
		zIndex: -1,
		width: 32,
		height: 32,
		borderRadius: '50%',
		animation: 'ripple 1.2s infinite ease-in-out',
		border: `2px solid ${theme.palette.mode == 'light' ? theme.palette.primary.main : theme.palette.primary.dark}`,
		content: '""',
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.9)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2)',
			opacity: 0,
		},
	},
}));

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
				title: 'Junior Acumatica Developer',
				start: '09/26/2022',
				end: null,
				details: ['Coffee', 'Tea', 'Milk'],
			},
		],
	},
	{
		company: 'PennAir',
		site: 'https://pennair.com',
		logo: PennAirIcon,
		location: 'York, Pennsylvania',
		type: 'Full-time',
		start: '07/09/2020',
		end: '09/12/2022',
		positions: [
			{
				title: 'Systems Engineer',
				start: '07/15/2022',
				end: '09/12/2022',
				details: undefined,
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
				details: undefined,
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
				details: undefined,
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
				details: undefined,
			},
			{
				title: 'IT Assistant',
				start: '06/01/2016',
				end: '08/22/2018',
				details: undefined,
			},
		],
	},
];

export default function Experience() {
	const theme = useTheme();

	return (
		<Box
			sx={{
				width: '100%',
				paddingTop: isMobile ? 1 : 6,
			}}
		>
			<Container>
				<Typography variant='h4' noWrap>
					Experience
				</Typography>
				<Divider />
				<Timeline
					sx={
						isMobile
							? {
									[`& .${timelineItemClasses.root}:before`]: {
										flex: 0,
										padding: 0,
									},
									[`& .${timelineOppositeContentClasses.root}`]: {
										flex: 0.16,
										padding: '6px 12px 0px 0px',
									},
									padding: 0,
							  }
							: {
									padding: 0,
							  }
					}
				>
					{experience.map((exp, expIndex) => (
						<div key={expIndex}>
							<TimelineItem>
								{!isMobile && (
									<TimelineOppositeContent color='textSecondary' sx={{ marginTop: 1.8 }}>
										{moment(exp.start).format('MMM YYYY')} - {exp.end ? moment(exp.end).format('MMM YYYY') : 'Present'}
									</TimelineOppositeContent>
								)}
								<TimelineSeparator>
									{exp.end == null ? (
										<StyledTimelineDot>
											<exp.logo sx={{ height: 32, width: 32 }} />
										</StyledTimelineDot>
									) : (
										<TimelineDot sx={{ backgroundColor: theme.palette.mode == 'light' ? '#f1f1f1' : '#bdbdbd' }}>
											<exp.logo sx={{ height: 32, width: 32 }} />
										</TimelineDot>
									)}
									<TimelineConnector sx={exp.end == null ? { bgcolor: theme.palette.mode == 'light' ? 'primary.main' : 'primary.dark' } : {}} />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant='h6'>
										<Link
											sx={{
												color: 'inherit',
												textDecoration: 'none',
											}}
											href={exp.site}
											target='_blank'
										>
											{exp.company}
										</Link>
									</Typography>
									{isMobile && (
										<Typography variant='body1'>
											{moment(exp.start).format('MMM YYYY')} - {exp.end ? moment(exp.end).format('MMM YYYY') : 'Present'}
										</Typography>
									)}
									<Grid container>
										<Grid item mr={0.5}>
											{exp.location.toLocaleLowerCase().includes('remote') ? (
												<PublicIcon sx={{ height: 16, width: 16, color: 'text.secondary' }} />
											) : (
												<PlaceIcon sx={{ height: 16, width: 16, color: 'text.secondary' }} />
											)}
										</Grid>
										<Grid item xs>
											<Typography variant='body1' color='text.secondary'>
												{exp.location}
											</Typography>
										</Grid>
									</Grid>

									<Stack direction='row' spacing={1}>
										<Chip label={exp.type} size='small' />
										<Tooltip title={prettyDate(exp.start, exp.end)}>
											<Chip label={getPrettyDuration(exp.start, exp.end)} size='small' />
										</Tooltip>
									</Stack>
								</TimelineContent>
							</TimelineItem>

							{exp.positions.map((pos, posIndex) => (
								<TimelineItem key={posIndex}>
									{!isMobile && <TimelineOppositeContent />}
									<TimelineSeparator>
										<TimelineDot color={pos.end == null ? 'primary' : undefined} sx={{ marginLeft: 2, marginRight: 2 }} />
										{expIndex + 1 === experience.length && posIndex + 1 === exp.positions.length ? '' : <TimelineConnector />}
									</TimelineSeparator>
									<TimelineContent>
										{/* <Typography variant='body1'>{pos.title}</Typography> */}

										<PositionDialog company={exp.company} position={pos.title as string} content={pos.details} />

										<Stack direction='row' spacing={1}>
											<Tooltip title={prettyDate(pos.start, pos.end)}>
												<Chip label={getPrettyDuration(pos.start, pos.end)} size='small' />
											</Tooltip>
										</Stack>
									</TimelineContent>
								</TimelineItem>
							))}
						</div>
					))}
				</Timeline>
			</Container>
		</Box>
	);
}

function getPrettyDuration(start: string, end: string | null): string {
	if (!end) {
		end = moment().format('MM/DD/YYYY');
	}

	let years = moment.duration(moment(end).diff(start)).asYears();

	let months = Math.round(
		moment
			.duration(
				moment.duration(moment(end).diff(start)).asYears() -
					parseInt(
						moment
							.duration(moment(end).diff(start))
							.asYears()
							.toString()
					),
				'years'
			)
			.asMonths()
	);

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
