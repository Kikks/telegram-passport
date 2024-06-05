import "./App.css";

import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

function App() {
	return (
		<>
			<TelegramLoginButton
				botName='tpassport_test_bot'
				dataOnauth={(user: TelegramUser) => console.log(user)}
			/>
		</>
	);
}

export default App;
