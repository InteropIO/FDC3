import React from "react";
import { observer } from "mobx-react";
import { List } from "@mui/material";
import systemLogStore from "../../store/SystemLogStore";
import { SystemLogItem } from "./SystemLogItem";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
	return {
		root: {
			width: "100%",
		},
	};
});

export const SystemLog = observer(() => {
	const { classes } = useStyles();

	return (
		<List component="nav" className={classes.root} aria-label="mailbox folders">
			{systemLogStore.logList.map((logItem) => (
				<SystemLogItem key={logItem.id} logItem={logItem} />
			))}
		</List>
	);
});
