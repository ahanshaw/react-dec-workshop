import React from 'react';
import { Link} from 'react-router-dom';

const Add = () => {	
	return (
		<>
			<div className="address-book__list">
				<h1><Link to={`/`}>Address Book</Link></h1>
				<p>Add form here.</p>
			</div>
		</>
	)
}

export default Add;