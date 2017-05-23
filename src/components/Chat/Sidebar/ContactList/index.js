import React from 'react';
import './ContactList.css';
import Contact from './Contact';


class ContactList extends React.Component {

	constructor(props) {

		super(props);
		this.userList = this.props.contacts;
		this.userListWithKey = this.userList.map((item, i)=>{
			// added 'key'
			item.id = i;
			// added 'description'
			item.description = 'Descriprion Lorem Ipsum + some long text lorem ipsum dolor inguit terem inla';
			return item;
			}
		);
		
	}

  render() {

  // filtering
	const filter = this.props.filter;
	var regexp = new RegExp(filter, 'i', 'g');
	const filteredContacts = this.userListWithKey.filter(item => item.username.match(regexp));


	if (filter == null ){
	    return (
		<section className="contact-list">
			{this.userListWithKey.map(item => <Contact key={item.id} name={item.username} description={item.description}/>)}
		</section>
	    );
	} else {
	    return (
		<section className="contact-list">
			{filteredContacts.map(item => <Contact key={item.id} name={item.username} description={item.description}/>)}
		</section>
	    );
	}
  }
}

export default ContactList;