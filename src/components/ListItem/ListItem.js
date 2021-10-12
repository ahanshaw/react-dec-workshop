const ListItem = ({ address }) => {
	return (
		<div className="address-book__item">
			<p>{address.first_name} {address.last_name}</p>
			<p>{address.address}</p>
			<p>{address.city}, {address.state} {address.zip}</p>
			<p>{address.phone}</p>
			<p className="email">{address.email}</p>
		</div>
	)
}

export default ListItem;