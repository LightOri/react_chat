import React from 'react';
import './Contact.css';

class Contact extends React.Component {

  render() {

	// const userAvatarPath = '/img/' + this.props.name.replace(' ','-') + '.jpg';
	const userAvatarPath = '/img/Donald-Trump.jpg';
	const userAvatarStyle = {backgroundImage: 'url(' + userAvatarPath + ')'};
	// console.log(userAvatarStyle);

    return (
    	<div className="contact-wrapper" id={this.props.name.replace(' ','-')}>
    		<div className="round-user-icon" style={userAvatarStyle}></div>
    		<div className="contact-info">
    			<h4>{this.props.name}</h4>
    			<p>{this.props.description}</p>
    		</div>
    		<div className="contact-time">
    			<p>15m</p>
    		</div>
    	</div>
    );
  }
}

export default Contact;