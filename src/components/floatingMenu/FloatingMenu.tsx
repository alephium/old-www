import React from 'react';
import './FloatingMenu.scss'
import { motion } from 'framer-motion'

//let yPos: number;

interface FloatingMenuProps {
	activeSectionIndex: number
	onMenuItemClick: (index: number) => void
}

interface MenuItem {
	id: number
	name: string
}

const sections: Array<MenuItem> = [
	{ id: 0, name: "Intro" },
	{ id: 1, name: "Features" },
	{ id: 2, name: "FAQ" },
	{ id: 3, name: "Roadmap" },
	{ id: 4, name: "Team" },
	{ id: 5, name: "News" },
]

const FloatingMenu: React.FC<FloatingMenuProps> = ({ activeSectionIndex, onMenuItemClick }) => {
	//const siteHeight = document.documentElement.scrollHeight;
	return (
		<menu className='FloatingMenu'>
			<motion.div className='FloatingMenu__ActiveFragment__container' animate={{y: activeSectionIndex * 24}}>
				<div className='FloatingMenu__ActiveFragment' />
			</motion.div>
			<ul>
				{ sections.map((section: MenuItem) => {
					return <li key={section.id} className={section.id === activeSectionIndex ? 'active' : ''} onClick={() => onMenuItemClick(section.id)}>{section.name}</li>
				}) }
			</ul>
		</menu>
	);
}

export default FloatingMenu;