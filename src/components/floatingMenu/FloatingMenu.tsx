import React from 'react';
import './FloatingMenu.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

let yPos: number;

const FloatingMenu: React.FC = () => {
	const siteHeight = document.documentElement.scrollHeight;

	useScrollPosition(({currPos}: {currPos: any}) => {
		// Move menu fragment
		yPos = currPos.y;
	});

	return (
		<menu className='FloatingMenu'>
			<div className='FloatingMenu__ActiveFragment' />
			<ul>
				<li>Tech</li>
				<li>FAQ</li>
				<li>Roadmap</li>
				<li>Team</li>
				<li>News</li>
			</ul>
		</menu>
	);
}

export default FloatingMenu;