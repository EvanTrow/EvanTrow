import * as React from 'react';
import moment from 'moment';
import { isMobile } from 'react-device-detect';

import { styled } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Container, Divider, Grid, Link, Typography } from '@mui/material';

import PlaceIcon from '@mui/icons-material/Place';
import SchoolIcon from '@mui/icons-material/School';
import { CocalicoIcon, StevensCollegeIcon } from '../components/SvgIcons';

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	boxShadow: '0',
	'&::after': {
		position: 'absolute',
		zIndex: -1,
		width: 32,
		height: 32,
		borderRadius: '50%',
		animation: 'ripple 1.2s infinite ease-in-out',
		border: `2px solid ${theme.palette.primary.main}`,
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
	},
];

export default function Education() {
	return (
		<Box
			sx={{
				width: '100%',
				paddingTop: isMobile ? 1 : 6,
			}}
		>
			<Container>
				<Typography variant='h4' noWrap>
					Education
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
					{education.map((edu, eduIndex) => (
						<div key={eduIndex}>
							<TimelineItem>
								{!isMobile && (
									<TimelineOppositeContent color='textSecondary' sx={{ marginTop: 1.8 }}>
										{edu.start} - {edu.end ? edu.end : 'Present'}
									</TimelineOppositeContent>
								)}
								<TimelineSeparator>
									{edu.end == null ? (
										<StyledTimelineDot>
											<edu.logo sx={{ height: 32, width: 32 }} />
										</StyledTimelineDot>
									) : (
										<TimelineDot sx={{ backgroundColor: '#f1f1f1' }}>
											<edu.logo sx={{ height: 32, width: 32 }} />
										</TimelineDot>
									)}
									{eduIndex + 1 != education.length && <TimelineConnector sx={edu.end == null ? { bgcolor: 'primary.main' } : {}} />}
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant='h6'>
										<Link
											sx={{
												color: 'inherit',
												textDecoration: 'none',
											}}
											href={edu.site}
											target='_blank'
										>
											{edu.school}
										</Link>
									</Typography>
									<Grid container>
										<Grid item mr={0.5}>
											<SchoolIcon sx={{ height: 16, width: 16 }} />
										</Grid>
										<Grid item xs>
											<Typography variant='body1'>{edu.degree}</Typography>
										</Grid>
									</Grid>

									{isMobile && (
										<Typography variant='body1'>
											{edu.start} - {edu.end ? edu.end : 'Present'}
										</Typography>
									)}
									<Grid container>
										<Grid item mr={0.5}>
											<PlaceIcon sx={{ height: 16, width: 16, color: 'text.secondary' }} />
										</Grid>
										<Grid item xs>
											<Typography variant='body1' color='text.secondary'>
												{edu.location}
											</Typography>
										</Grid>
									</Grid>
								</TimelineContent>
							</TimelineItem>
						</div>
					))}
				</Timeline>
			</Container>
		</Box>
	);
}
