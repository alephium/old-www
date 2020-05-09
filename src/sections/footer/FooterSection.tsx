import React from 'react';
import './FooterSection.scss';

const FooterSection = () => {
	return (
		<footer className='FooterSection'>
			<div className='FooterSection__follow-us'>
				<h1>Follow us on:</h1>
				<div className='FooterSection__follow-us__networks'>
					<a href='https://t.me/joinchat/Jti2ixPvStmspaT1E3I8QQ'><div className='social-icon telegram' /></a>
					<a href='https://twitter.com/alephium'><div className='social-icon twitter' /></a>
					<a href='https://medium.com/@alephium'><div className='social-icon medium' /></a>
					<a href='https://weibo.com/u/6993237481'><div className='social-icon weibo' /></a>
				</div>
			</div>
			<div className='FooterSection__copyright'>
				<span>© 2020 Alephium, All rights reserved</span>
			</div>
		</footer>
	)
}

export default FooterSection