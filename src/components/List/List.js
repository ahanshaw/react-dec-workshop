import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';

import { database } from '../../services/firebase';

import ListItem from "../ListItem/ListItem";

const List = () => {
	const [addresses, setAddresses] = useState('');
	const {letter} = useParams();

	useEffect(() => {
		if (letter) {
			const currentLetter = letter.toLowerCase();
			database.ref().once('value', function (snapshot) {
				let addressArr = [];
				snapshot.forEach(contact => {
					if (contact.val().last_name.toLowerCase().startsWith(currentLetter)) {
						addressArr.push({
							key: contact.key,
							first_name: contact.val().first_name,
							last_name: contact.val().last_name,
							address: contact.val().address,
							city: contact.val().city,
							state: contact.val().state,
							zip: contact.val().zip,
							email: contact.val().email,
							phone: contact.val().phone
						});
				    }
				});
				setAddresses(addressArr);
			});
		}
		else {
			setAddresses('');
		}
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	}, [letter]);

	if (!addresses){
        return (
			<>
				<h1><Link to={`/`}>Address Book</Link></h1>
			</>
        );
	}
	
	return (
		<>
			<h1><Link to={`/`}>Address Book</Link></h1>
			{addresses.length < 1 &&
				<p>Sorry, no addresses found.</p>
			}
			{addresses.map((address) => {
				return (
					<ListItem key={address.key} address={address} />
				)
			})}
		</>
	)
}

export default List;