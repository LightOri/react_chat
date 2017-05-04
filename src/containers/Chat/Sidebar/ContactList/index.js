import React from 'react';
import './ContactList.css';
import Contact from './Contact';


const contacts = [
	{id: 1, name: 'Barack Obama', avatar: '', description: 'Descriprion Lorem Ipsum'},
	{id: 2, name: 'Bill Gates', avatar: '', description: 'Descriprion Lorem Ipsum + some long text lorem ipsum dolor inguit terem inla'},
	{id: 3, name: 'Donald Trump', avatar: '', description: 'Descriprion Lorem Ipsum + some long text lorem ipsum dolor inguit terem inla'},
	{id: 4, name: 'Hillary Clinton', avatar: '', description: 'Descriprion 4'},
	{id: 5, name: 'Steve Jobs', avatar: '', description: 'Descriprion 5'}
	];


class ContactList extends React.Component {
  render() {

  	// filtering
	const filter = this.props.filter;
	var regexp = new RegExp(filter, 'i', 'g');
	const filteredContacts = contacts.filter(item => item.name.match(regexp));


	if (filter == null ){
	    return (
		<section className="contact-list">
			{contacts.map(item => <Contact key={item.id} name={item.name} description={item.description}/>)}
		</section>
	    );
	} else {
	    return (
		<section className="contact-list">
			{filteredContacts.map(item => <Contact key={item.id} name={item.name} description={item.description}/>)}
		</section>
	    );
	}
  }
}

export default ContactList;