import React from 'react';
import Register from '../../components/Register';

class RegisterContainer extends React.Component {

	constructor(props) {
  	super(props);
  	this.register = this.register.bind(this);

  }

	register(e){
	  	e.preventDefault();

		const userName = document.forms['Register'].elements['username'].value;
		const email = document.forms['Register'].elements['email'].value;
		const password = document.forms['Register'].elements['password'].value;

		const credentials = {"username": userName,
							"email": email,
							"password": password};

		const myHeaders = new Headers(); myHeaders.set('Content-Type', 'application/json');
		
		const myInit = { method: 'post',
					headers: myHeaders,
					mode: 'cors',
					body: JSON.stringify(credentials) };

		fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/signup`, myInit)
	    	.then(data => console.log(data));
    }


    // password confirmation
    confirmPassword(){
		const password = document.forms['Register'].elements['password'];
		const confirmPassword = document.forms['Register'].elements['confirm'];

	    var goodColor = "#66cc66";
	    var badColor = "#ff6666";

	    if(password.value === confirmPassword.value){
	        confirmPassword.style.backgroundColor = goodColor;
	    }else{
	        confirmPassword.style.backgroundColor = badColor;
	    }
	}  


  render() {
    return (
    	<Register register={this.register} confirmPassword={this.confirmPassword} />
    );
  }
}

export default RegisterContainer;