import React from "react";
import { observer } from "mobx-react";
import intentStore from "../../store/IntentStore";
import { AccordionList, AccordionListItem } from "../common/AccordionList";
import { TextField } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		textField: {
			marginTop: theme.spacing(2),
			width: "100%",
		},
		input: {
			fontSize: "14px",
			color: "rgba(0, 0, 0, 0.6)",
		},
		"& .Mui-disabled": {
			borderColor: theme.palette.text.primary,
		},
	};
});

export const IntentListeners = observer(() => {
	const { classes } = useStyles();
	const intentListeners: AccordionListItem[] = intentStore.intentListeners.map(({ id, type, lastReceivedContext }) => {
		const receivedContextListenerValue = lastReceivedContext ? JSON.stringify(lastReceivedContext, undefined, 4) : "";

		const contextField = (
			<TextField
				disabled
				label={"LAST RECEIVED CONTEXT"}
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
				contentEditable={false}
				fullWidth
				multiline
				variant="outlined"
				size="small"
				value={receivedContextListenerValue}
				InputProps={{
					classes: {
						input: classes.input,
					},
				}}
			/>
		);

		return { id, textPrimary: `${type}`, afterEachElement: contextField };
	});

	const handleDeleteListener = (id: string) => {
		intentStore.removeIntentListener(id);
	};

	return (
		<AccordionList
			title="Intents"
			noItemsText="No Intent Listeners"
			listItems={intentListeners}
			onDelete={handleDeleteListener}
		/>
	);
});
