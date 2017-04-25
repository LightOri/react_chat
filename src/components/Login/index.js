import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import * as io from 'socket.io-client';

class Login extends React.Component {

  constructor(props) {
  	super(props);
  	this.loginStage1 = this.loginStage1.bind(this);
  	this.loginStage2 = this.loginStage2.bind(this);

  }


  // Login Stage 1 - "receiving a TOKEN"
  loginStage1(e){
  	e.preventDefault();

  	const userName = document.forms['LogIn'].elements['username'].value;
	const password = document.forms['LogIn'].elements['password'].value;

	const credentials = {"username": userName,
						"password": password};

	const myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');
	
	const myInit = { method: 'post',
				headers: myHeaders,
				mode: 'cors',
				body: JSON.stringify(credentials) };

	fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/login`, myInit)
    	.then(res => res.json())
    	.then(resObj => localStorage.setItem('userData', JSON.stringify(resObj)))
    	
    // parsing token from LocalStorage
    const token = JSON.parse(localStorage.getItem('userData')).token;

    if (token !== undefined){
    	console.log('TOKEN RECEIVED: ' + token);
    }

    // Login Stage 2: "connection"
    this.loginStage2(token);
  }


  loginStage2(token){
  	const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com'); //port 8000 for home network

	socket.on('connect', () => {
         socket.emit('authenticate', { token: token});
         console.log("connected!!");
     });

	// on join
	socket.on('join', msg => {console.log('User ' + msg.user.username + ' has joined!') });

	// on leave
	socket.on('leave', msg => {console.log('User ' + msg.user.username + ' has left!') });

		// sending message
/*	const message = 'testMsg32';
	socket.emit('message', message);*/

	// userlist
	/*fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/users', {method: 'GET'})
		.then(res => res.json())
		.then(res => JSON.stringify(res))
		.then(res =>console.log(res));*/
  }



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

				<button onClick={this.loginStage1}>Log In</button>
			</form>
			<Link to="/register">Do not have account? Please click <span>Register</span></Link>
		</section>
    );
  }
}

export default Login;