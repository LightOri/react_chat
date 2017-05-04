import React from 'react';
import './ContactList.css';
import Contact from './Contact';


	// list of contacts
	fetch(`http://eleksfrontendcamp-mockapitron.rhcloud.com/users`)
			.then(response => response.json())
			.then(data => validUsers(data))
			.then(filteredData => localStorage.setItem('userList', JSON.stringify(filteredData)))
			.catch(err => console.error(err));

	function validUsers(data){
		return data.filter(item => item.username);
	}

const userList = JSON.parse(localStorage.getItem('userList'));

// add 'key' and 'description' fields to userlist
const userListWithKey = userList.map((item, i)=>{
		// added 'key'
		item.id = i;
		// added 'description'
		item.description = 'Descriprion Lorem Ipsum + some long text lorem ipsum dolor inguit terem inla';
		return item;
		}
	);



class ContactList extends React.Component {
  render() {

  	// filtering
	const filter = this.props.filter;
	var regexp = new RegExp(filter, 'i', 'g');
	const filteredContacts = userListWithKey.filter(item => item.username.match(regexp));


	if (filter == null ){
	    return (
		<section className="contact-list">
			{userListWithKey.map(item => <Contact key={item.id} name={item.username} description={item.description}/>)}
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