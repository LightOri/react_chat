import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends React.Component {

  render() {
    return (
		<section className="sign-section">

			<p>Sign-Up Form</p>
			<form action="/..." method="POST" name="Register">
				<label>Username:</label>
				<input type="text" name="username" />

				<label>Email:</label>
				<input type="email" name="email" />
				
				<label>Password:</label>				
				<input type="password" name="password" />

				<label>Confirm password:</label>
				<input type="password" name="confirm" onKeyUp={this.props.confirmPassword}/>
				
				<button onClick={this.props.register}>Sign Up</button>
			</form>
			<Link to="/login">Already have an account? Please <span>Log In</span></Link>
		</section>
    );
  }
}

export default Register;