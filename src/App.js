import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from "./components/Nav/Nav";
import List from "./components/List/List";
import Add from "./components/Add/Add";

import "./assets/scss/main.scss";

const App = () => {
	return (
		<Router>
				<div className="address-book">
					<main className="address-book__main">
						<div className="address-book__list">
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
						</div>
					</main>
					<Nav />
				</div>
		</Router>
	);
}

export default App;
