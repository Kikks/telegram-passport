/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import "./App.css";

import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
// @ts-ignore
import TelegramLoginButton2 from "react-telegram-login";

function App() {
	return (
		<>
			<TelegramLoginButton
				botName='tpassport_test_bot'
				dataOnauth={(user: TelegramUser) => console.log(user)}
			/>
			<TelegramLoginButton2
				dataOnauth={(user: any) => console.log(user)}
				botName='tpassport_test_bot'
			/>
		</>
	);
}

export default App;
