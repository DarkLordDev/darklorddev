import React, { useState } from "react";
import appContext from "./AppContext";

const AppState = (props) => {
	const [alertCreds, setAlert] = useState(null);

	const showAlert = (msg, type) => {
		setAlert({
			msg,
			type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 5000);
	};
	return (
		<appContext.Provider value={{ showAlert, alertCreds, setAlert }}>
			{props.children}
		</appContext.Provider>
	);
};

export default AppState;
