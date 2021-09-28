import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Nav } from "./components/Nav/Nav";
import { List } from "./components/List/List";
import { Add } from "./components/Add/Add";

import "./assets/scss/main.scss";

function App() {
	return (
		<div className="address-book">
			<main className="address-book__main">
				<div className="address-book__list">
					<Router>
						<Switch>
							<Route path="/add">
								<Add />
							</Route>
							<Route path="/:letter">
								<List />
							</Route>
							<Route path="/">
								<List />
							</Route>
						</Switch>
					</Router>
				</div>
			</main>
			<Nav />
		</div>
	);
}

export default App;
