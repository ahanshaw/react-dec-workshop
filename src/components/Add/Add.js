import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { database } from '../../services/firebase';

const Add = () => {
	const [addressAdded, setAddressAdded] = useState(false);
	const [address, setAddress] = useState({
		first_name: '',
		last_name: '',
		address: '',
		city: '',
		state: '',
		zip:'',
		phone: '',
		email: '',
	});
	
	const onChange = (e) => {
		setAddress({ ...address, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		database.ref()
			.push({
				first_name: address.first_name,
				last_name: address.last_name,
				address: address.address,
				city: address.city,
				state: address.state,
				zip: address.zip,
				phone: address.phone,
				email: address.email
			})
			.then(
				setAddressAdded(true),
		)
		.catch()
	}

	const resetForm = (e) => {
		e.preventDefault();
		setAddressAdded(false);
		setAddress({
			...address,
			first_name: '',
			last_name: '',
			address: '',
			city: '',
			state: '',
			zip:'',
			phone: '',
			email: '',
		});
	}

	if (addressAdded){
		return (
			<div>
				<h1><Link to={`/`}>Address Book</Link></h1>
				<p>Address added! <button onClick={resetForm}>Add another</button>.</p>
			</div>
        );
    }

	return (
		<>
			<div className="address-book__form">
				<h1><Link to={`/`}>Address Book</Link></h1>
				<p>All fields are required.</p>
				<form className="" onSubmit={(e) => onSubmit(e)}>
					<fieldset>
						<label htmlFor="first_name">First Name</label>
						<input type="text" id="first_name" name="first_name" value={address.first_name} onChange={onChange} required />
					</fieldset>
					<fieldset>
						<label htmlFor="last_name">Last Name</label>
						<input type="text" id="last_name" name="last_name" value={address.last_name} onChange={onChange} required />
					</fieldset>
					<fieldset>
						<label htmlFor="address">Address</label>
						<input type="text" id="address" name="address" value={address.address} onChange={onChange} required />
					</fieldset>
					<fieldset>
						<label htmlFor="city">City</label>
						<input type="text" id="city" name="city" value={address.city} onChange={onChange} required />
					</fieldset>	
					<fieldset>
						<label htmlFor="state">State</label>
						<input type="text" id="state" name="state" value={address.state} onChange={onChange} required />
					</fieldset>	
					<fieldset>
						<label htmlFor="zip">Zip</label>
						<input type="text" id="zip" name="zip" value={address.zip} onChange={onChange} required />
					</fieldset>	
					<fieldset>
						<label htmlFor="phone">Phone</label>
						<input type="phone" id="phone" name="phone" value={address.phone} onChange={onChange} required />
					</fieldset>	
					<fieldset>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" value={address.email} onChange={onChange} required />
					</fieldset>
					<button className="btn btn--submit" type="submit">Add Address</button>
				</form>
			</div>
		</>
	)
}

export default Add;