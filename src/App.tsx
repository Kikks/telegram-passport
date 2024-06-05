import "./App.css";

import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
import TelegramLoginButton2 from "react-telegram-login";

function App() {
	return (
		<>
			<TelegramLoginButton
				botName='tpassport_test_bot'
				dataOnauth={(user: TelegramUser) => console.log(user)}
			/>
			<TelegramLoginButton2
				dataOnauth={user => console.log(user)}
				botName='OdauBot'
			/>
			,
		</>
	);
}

export default App;
