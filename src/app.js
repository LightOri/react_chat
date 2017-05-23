import React from 'react';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import './app.css';
import HomeContainer from './containers/home';
import LoginContainer from './containers/login';
import RegisterContainer from './containers/register';
import { ChatContainer } from './containers/chat';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
        <Provider store={ this.props.store }>
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
        			<Route path='/chat' component={ChatContainer}/>
    	      </div>
    	    </Router>
        </Provider>
        );
  }
}

export default App;