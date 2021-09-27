import React from 'react';

export function Nav({ parentCallback }) {
	const updateLetter = (event) => {
		parentCallback(event.target.innerText);
	}
	
	return (
		<nav className="address-book__nav">
			<ul>
				<li><button className="btn" onClick={updateLetter}>A</button></li>
				<li><button className="btn" onClick={updateLetter}>B</button></li>
				<li><button className="btn" onClick={updateLetter}>C</button></li>
				<li><button className="btn" onClick={updateLetter}>D</button></li>
				<li><button className="btn" onClick={updateLetter}>E</button></li>
				<li><button className="btn" onClick={updateLetter}>F</button></li>
				<li><button className="btn" onClick={updateLetter}>G</button></li>
				<li><button className="btn" onClick={updateLetter}>H</button></li>
				<li><button className="btn" onClick={updateLetter}>I</button></li>
				<li><button className="btn" onClick={updateLetter}>J</button></li>
				<li><button className="btn" onClick={updateLetter}>K</button></li>
				<li><button className="btn" onClick={updateLetter}>L</button></li>
				<li><button className="btn" onClick={updateLetter}>M</button></li>
				<li><button className="btn" onClick={updateLetter}>N</button></li>
				<li><button className="btn" onClick={updateLetter}>0</button></li>
				<li><button className="btn" onClick={updateLetter}>P</button></li>
				<li><button className="btn" onClick={updateLetter}>Q</button></li>
				<li><button className="btn" onClick={updateLetter}>R</button></li>
				<li><button className="btn" onClick={updateLetter}>S</button></li>
				<li><button className="btn" onClick={updateLetter}>T</button></li>
				<li><button className="btn" onClick={updateLetter}>U</button></li>
				<li><button className="btn" onClick={updateLetter}>V</button></li>
				<li><button className="btn" onClick={updateLetter}>W</button></li>
				<li><button className="btn" onClick={updateLetter}>X</button></li>
				<li><button className="btn" onClick={updateLetter}>Y</button></li>
				<li><button className="btn" onClick={updateLetter}>Z</button></li>
				<li><button className="btn btn--add">+</button></li>
			</ul>
		</nav>
	)
}