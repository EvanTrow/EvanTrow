import * as React from 'react';

import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Divider, IconButton, Stack, Typography } from '@mui/material';

import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

type PositionDialogProps = {
	company: string;
	position: string;
	content: JSX.Element | undefined;
};

export default function PositionDialog(props: PositionDialogProps) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	if (props.content) {
		return (
			<>
				<Stack direction='row' spacing={1}>
					<Typography variant='body1'>{props.position}</Typography>

					<IconButton sx={{ height: 30, width: 30 }} onClick={handleClickOpen}>
						<SpeakerNotesIcon sx={{ height: 24, width: 24 }} />
					</IconButton>
				</Stack>
				<Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth>
					<DialogTitle>
						<Typography variant='h6'>{props.company}</Typography>
						<Typography variant='body1' color='text.secondary'>
							{props.position}
						</Typography>
					</DialogTitle>
					<Divider />
					<DialogContent>
						<DialogContentText>{props.content}</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} variant='contained'>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</>
		);
	} else {
		return <Typography variant='body1'>{props.position}</Typography>;
	}
}
