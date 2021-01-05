import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'
import './App.css'
import Navbar from './components/Navbar'
import User from './components/User'
import Alert from './components/Alert'
import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import NotFound from './screens/NotFound'

function App() {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App '>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route path='/' exact component={HomeScreen} />
								<Route exact path='/about' component={AboutScreen} />
								<Route exact path='/user/:login' component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	)
}

export default App
