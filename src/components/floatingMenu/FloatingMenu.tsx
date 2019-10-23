import React, { useEffect } from 'react';
import './FloatingMenu.scss'
import { motion, useAnimation } from 'framer-motion'
import { useGlobalStateValue, headerStates } from '../../store/state';

const menuVariants = {
	hidden: {
		x: "-100%"
	},
	visible: {
		x: 0
	}
}

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

	const controls = useAnimation()
	const [{ headerState }, dispatch] = useGlobalStateValue();

	useEffect(() => {
		if (headerState === headerStates.Wide) {
			controls.start("visible")
		}
		else if (headerState === headerStates.Tall) {
			controls.start("visible")
		}
		else if (headerState === headerStates.Minimized)
		{
			controls.start("hidden")
		}
		console.log(headerState)
	}, [headerState, controls])

	return (
		<motion.menu className='FloatingMenu' variants={menuVariants} animate={controls}>
			<motion.div className='FloatingMenu__ActiveFragment__container' animate={{ y: activeSectionIndex * 24 }}>
				<div className='FloatingMenu__ActiveFragment' />
			</motion.div>
			<ul className="'FloatingMenu__list">
				{sections.map((section: MenuItem) => {
					return <li key={section.id} className={`FloatingMenu__item ${section.id === activeSectionIndex ? 'active' : ''}`} onClick={() => onMenuItemClick(section.id)}>{section.name}</li>
				})}
			</ul>
		</motion.menu>
	);
}

export default FloatingMenu;