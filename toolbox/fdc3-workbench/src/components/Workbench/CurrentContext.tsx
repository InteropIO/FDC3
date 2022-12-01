import React from "react";
import { observer } from "mobx-react";
import { TextField } from "@mui/material";
import { createStyles, Theme } from "@mui/material/styles";
import { AccordionContent } from "../common/AccordionContent";
import contextStore from "../../store/ContextStore";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => {
	return {
		textField: {
			marginTop: theme.spacing(2),
			width: "100%",
		},
		input: {
			fontSize: "14px",
			color: theme.palette.text.primary,
		},
		"& .Mui-disabled": {
			borderColor: theme.palette.text.primary,
		},
	};
});

export const CurrentContext = observer(() => {
	const { classes } = useStyles();
	const context = JSON.stringify(contextStore.currentContext, undefined, 4);

	return (
		<AccordionContent title="Context">
			<TextField
				disabled
				className={classes.textField}
				id="context-id"
				contentEditable={false}
				fullWidth
				multiline
				variant="outlined"
				size="small"
				value={context}
				InputProps={{
					classes: {
						input: classes.input,
					},
				}}
			/>
		</AccordionContent>
	);
});
