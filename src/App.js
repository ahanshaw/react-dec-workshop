import { useCallback, useState } from "react";

import { Nav } from "./components/Nav/Nav";
import { List } from "./components/List/List";

import "./assets/scss/main.scss";

function App() {
	const [letter, setLetter] = useState('');

	const callback = useCallback((letter) => {
		setLetter(letter);
	}, []);
	
	return (
		<div className="address-book">
			<List letter={letter} />
			<Nav parentCallback={callback} />
		</div>
	);
}

export default App;
