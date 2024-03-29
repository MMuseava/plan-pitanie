import "./App.css";
import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";
import RulesNutrition from "./components/rulesNutrition/RulesNutrition";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<HomePage />
			<RulesNutrition />
		</div>
	);
}

export default App;
