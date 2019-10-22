import React from 'react';
import './FloatingMenu.css'
import { motion } from 'framer-motion'

//let yPos: number;

interface FloatingMenuProps {
	activeSectionIndex: number
	onMenuItemClick: (index: number) => void
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ activeSectionIndex = 0, onMenuItemClick }) => {
	//const siteHeight = document.documentElement.scrollHeight;
	return (
		<menu className='FloatingMenu'>
			<motion.div className='FloatingMenu__ActiveFragment__container' animate={{y: activeSectionIndex * 24}}>
				<div className='FloatingMenu__ActiveFragment' />
			</motion.div>
			<ul>
				<li onClick={() => onMenuItemClick(0)}>Intro</li>
				<li onClick={() => onMenuItemClick(1)}>Features</li>
				<li onClick={() => onMenuItemClick(2)}>FAQ</li>
				<li onClick={() => onMenuItemClick(3)}>Roadmap</li>
				<li onClick={() => onMenuItemClick(4)}>Team</li>
				<li onClick={() => onMenuItemClick(5)}>News</li>
			</ul>
		</menu>
	);
}

export default FloatingMenu;