import React from 'react';
import { NavLink } from 'react-router-dom';

export function Nav({ parentCallback }) {
	
	return (
		<nav className="address-book__nav">
			<ul>
				<li><NavLink to={`/a`} className="btn" activeClassName="selected">A</NavLink></li>
				<li><NavLink to={`/b`} className="btn" activeClassName="selected">B</NavLink></li>
				<li><NavLink to={`/c`} className="btn" activeClassName="selected">C</NavLink></li>
				<li><NavLink to={`/d`} className="btn" activeClassName="selected">D</NavLink></li>
				<li><NavLink to={`/e`} className="btn" activeClassName="selected">E</NavLink></li>
				<li><NavLink to={`/f`} className="btn" activeClassName="selected">F</NavLink></li>
				<li><NavLink to={`/g`} className="btn" activeClassName="selected">G</NavLink></li>
				<li><NavLink to={`/h`} className="btn" activeClassName="selected">H</NavLink></li>
				<li><NavLink to={`/i`} className="btn" activeClassName="selected">I</NavLink></li>
				<li><NavLink to={`/j`} className="btn" activeClassName="selected">J</NavLink></li>
				<li><NavLink to={`/k`} className="btn" activeClassName="selected">K</NavLink></li>
				<li><NavLink to={`/l`} className="btn" activeClassName="selected">L</NavLink></li>
				<li><NavLink to={`/m`} className="btn" activeClassName="selected">N</NavLink></li>
				<li><NavLink to={`/n`} className="btn" activeClassName="selected">N</NavLink></li>
				<li><NavLink to={`/o`} className="btn" activeClassName="selected">O</NavLink></li>
				<li><NavLink to={`/p`} className="btn" activeClassName="selected">P</NavLink></li>
				<li><NavLink to={`/q`} className="btn" activeClassName="selected">Q</NavLink></li>
				<li><NavLink to={`/r`} className="btn" activeClassName="selected">R</NavLink></li>
				<li><NavLink to={`/s`} className="btn" activeClassName="selected">S</NavLink></li>
				<li><NavLink to={`/t`} className="btn" activeClassName="selected">T</NavLink></li>
				<li><NavLink to={`/u`} className="btn" activeClassName="selected">U</NavLink></li>
				<li><NavLink to={`/v`} className="btn" activeClassName="selected">V</NavLink></li>
				<li><NavLink to={`/w`} className="btn" activeClassName="selected">W</NavLink></li>
				<li><NavLink to={`/x`} className="btn" activeClassName="selected">X</NavLink></li>
				<li><NavLink to={`/y`} className="btn" activeClassName="selected">Y</NavLink></li>
				<li><NavLink to={`/z`} className="btn" activeClassName="selected">Z</NavLink></li>
				<li><NavLink to={`/add`} className="btn btn--add" activeClassName="selected">+</NavLink></li>
			</ul>
		</nav>
	)
}