import React from 'react';
import './Header.css';
import logo from '../../images/logo-h.svg';

const Header: React.FC = () => {
	return (
		<header className='Header'>
			<img src={logo} className="Header__logo" alt="logo" />
		</header>
	);
}

export default Header;