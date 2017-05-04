import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends React.Component {

  render() {
    return (
		<section className="login-section">

			<p>Log In to Skype</p>
			<form action="/..." method="POST" name="LogIn">
				<label>Username:</label>
				<input type="text" name="username" />

				<label>Password:</label>
				<input type="password" name="password" />

				<input type="checkbox" name="remember" />
				<label>Remember me</label>

				<button onClick={this.props.login}>Log In</button>
			</form>
			<Link to="/register">Do not have account? Please click <span>Register</span></Link>
		</section>
    );
  }
}

export default Login;