import { useState, useEffect } from "react";

import { database } from '../../services/firebase';

export function List({ letter }) {
	const [addresses, setAddresses] = useState('');

	useEffect(() => {
		const currentLetter = letter.toLowerCase();
 
		if (letter) {
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
	}, [letter]);

	if (!addresses){
        return (
			<main className="address-book__main">
				<div className="address-book__list">
					<h1>Address Book</h1>
				</div>
			</main>
        );
	}
	
	return (
		<main className="address-book__main">
			<div className="address-book__list">
				<h1>Address Book</h1>
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
							<p>{address.email}</p>
						</div>
					)
				})}
			</div>
		</main>
	)
}