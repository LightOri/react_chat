import React from 'react';
import Login from '../../components/Login';
import * as io from 'socket.io-client';

class LoginContainer extends React.Component {

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
  	const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000'); //port 8000 for home network

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
		<Login login={this.loginStage1}/>
    );
  }
}

export default LoginContainer;