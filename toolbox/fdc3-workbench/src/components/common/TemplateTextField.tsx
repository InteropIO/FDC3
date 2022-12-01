import { TextField } from "@mui/material";
import { withStyles } from 'tss-react/mui';

export const TemplateTextField = withStyles(TextField, {
	root: {
		"& label.Mui-focused": {
			color: "#0086bf",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#0086bf",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#0086bf",
			},
			"&:hover fieldset": {
				borderColor: "#0086bf",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#0086bf",
			},
		},
	},
});
