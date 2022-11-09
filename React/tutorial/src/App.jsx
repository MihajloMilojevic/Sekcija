import React from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import Buttons from './pages/Buttons';
import Counters from './pages/Counters';
import List from "./pages/List";
import ToDo from './pages/ToDo';
import FormWithLotsOfFields from "./pages/FormWithLotsOfFields"
import Hooks from './pages/Hooks';
import ContextTest from './pages/ContextTest';

import Layout from './components/Layout';

import ContextProvider from './context/stateContext';
import "./styles.css"

function App() {
	return (
		<Router>
			<ContextProvider>
				<Layout>
					<Routes>
						<Route 
							exact path="/"
							element={<h1>Home page</h1>}
						/>
						<Route 
							exact path="/buttons"
							element={<Buttons />}
						/>
						<Route 
							exact path="/counters"
							element={<Counters />}
						/>
						<Route 
							exact path="/list"
							element={<List />}
						/>
						<Route 
							exact path="/todo"
							element={<ToDo />}
						/>
						<Route 
							exact path="/form"
							element={<FormWithLotsOfFields />}
						/>
						<Route
							exact path="/hooks/:text"
							element={<Hooks />}
						/>
						<Route
							exact path="/loading"
							element={<ContextTest />}
						/>
						<Route 
							path="*"
							element={
								<div>
									<h1>404 - Page does not exist</h1>
									<a href='/'>Back to home</a>
								</div>
							}
						/>
					</Routes>
				</Layout>
			</ContextProvider>
		</Router>
	)
}

export default App;