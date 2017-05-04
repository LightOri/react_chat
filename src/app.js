import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './app.css';
import HomeContainer from './containers/Home';
import LoginContainer from './containers/Login';
import RegisterContainer from './containers/Register';
import Chat from './components/Chat';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
    	<Router history={history}>
	      <div className="app">
			<nav className="main-nav">
				<Link to="/home">Home</Link>
				<Link to="/login">Log In</Link>
				<Link to="/register">Register</Link>
				<Link to="/chat">Chat</Link>
			</nav>
			<Route exact path='/' render={() => <Redirect to="/home"/>}/>
			<Route path='/home' component={HomeContainer}/>
			<Route path='/login' component={LoginContainer}/>
			<Route path='/register' component={RegisterContainer}/>
			<Route path='/chat' component={Chat}/>
	      </div>
	    </Router>
    );
  }
}

export default App;