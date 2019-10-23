import React, { useEffect, useState } from 'react';
import './FloatingMenu.scss'
import { motion } from 'framer-motion'
import { useGlobalStateValue, headerStates } from '../../store/state';

const menuVariants = {
	hidden: {
		x: "-100%"
	},
	visible: {
		x: 0
	}
}

const textVariants = {
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	}
}

const bulletVariants = {
	hidden: {
		x: 70
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

	const [{ headerState }] = useGlobalStateValue();
	const [currentVariant, setCurrentVariant] = useState("visible")

	useEffect(() => {
		if (headerState === headerStates.Wide) {
			setCurrentVariant("visible")
		}
		else if (headerState === headerStates.Tall) {
			setCurrentVariant("visible")
		}
		else if (headerState === headerStates.Minimized)
		{
			setCurrentVariant("hidden")
		}
	}, [headerState, currentVariant])

	return (
		<motion.menu className='FloatingMenu' variants={menuVariants} animate={currentVariant}>
			<motion.div className='FloatingMenu__ActiveFragment__container' animate={{ y: activeSectionIndex * 24, x: currentVariant === "hidden" ? 70 : 0 }}>
				<div className='FloatingMenu__ActiveFragment' />
			</motion.div>
			<ul className="'FloatingMenu__list">
				{sections.map((section: MenuItem) => {
					return <li key={section.id} className={`FloatingMenu__item ${section.id === activeSectionIndex ? 'active' : ''}`} onClick={() => onMenuItemClick(section.id)}>
						<motion.span variants={bulletVariants} animate={currentVariant} className='FloatingMenu__item__bullet'>•</motion.span>
						<motion.span variants={textVariants} animate={currentVariant} className='FloatingMenu__item__text'>{section.name}</motion.span>
					</li>
				})}
			</ul>
		</motion.menu>
	);
}

export default FloatingMenu;