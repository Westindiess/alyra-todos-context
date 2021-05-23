import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import Home from "./components/Home"
import Login from "./components/Login"
import { Switch, Route } from "react-router-dom"

function App() {
	return (
		<ColorModeContainer>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/Login" component={Login} />
				<Route path="/todos" component={Todos}>
					<div className="container my-4">
						<h1 className="text-center">ToDos App</h1>
						<Todos />
					</div>
				</Route>
			</Switch>
		</ColorModeContainer>
	)
}

export default App
