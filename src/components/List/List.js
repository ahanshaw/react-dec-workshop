import { useState, useEffect } from "react";
import {useParams, Link} from 'react-router-dom';

import { database } from '../../services/firebase';

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
						addressArr.push(contact.val());
					}
				});
				setAddresses(addressArr);
			});
		}
		else {
			setAddresses('');
		}
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
			{addresses.map((address, index) => {
				return (
					<div className="address-book__item" key={index}>
						<p>{address.first_name} {address.last_name}</p>
						<p>{address.address}</p>
						<p>{address.city}, {address.state} {address.zip}</p>
						<p>{address.phone}</p>
						<p className="email">{address.email}</p>
					</div>
				)
			})}
		</>
	)
}

export default List;