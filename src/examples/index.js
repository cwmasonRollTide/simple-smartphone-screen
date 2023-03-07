import React from "react";
import SimpleSmartphoneComponent from "../components";
import { useTheme, ThemeProvider } from '@mui/material/styles';

export default function Example() {
	const exampleMessages = [{
		messageBody: "This is a message body - it is required"
	},{
		messageBody: "This is a message without an image"
	}];
	const theme = useTheme();
	const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
	const colorMode = React.useContext(ColorModeContext);
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<SimpleSmartphoneComponent messages={exampleMessages} />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}