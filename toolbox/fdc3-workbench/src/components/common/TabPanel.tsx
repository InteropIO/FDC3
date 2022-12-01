import React from "react";
import { Theme } from "@mui/material/styles";
import { makeStyles } from 'tss-react/mui';
interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

const useStyles = makeStyles()((theme: Theme) =>{
	return {
		tabPanel: {
			padding: theme.spacing(2),
		},
	};
});

export const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
	const { classes } = useStyles();

	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && <div className={classes.tabPanel}>{children}</div>}
		</div>
	);
};
