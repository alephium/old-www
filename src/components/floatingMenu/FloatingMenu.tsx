import React, { useEffect, useState } from 'react';
import './FloatingMenu.scss'
import { motion } from 'framer-motion'
import { useGlobalStateValue, headerStates } from '../../store/state';

const menuVariants = {
	minimized: {
		opacity: 1,
		x: "-100%"
	},
	hidden: {
		x: 0,
		opacity: 0,
		display: 'none'
	},
	visible: {
		opacity: 1,
		x: 0
	},
	fullscreen: {
		opacity: 1,
		x: "calc(50vw - 50%)",
		y: "calc(30vh - 50%)",
		scale: 2,
		marginLeft: 0
	}
}

const textVariants = {
	minimized: {
		opacity: 0
	},
	hidden: {
		opacity: 0
	},
	visible: {
		opacity: 1
	},
	fullscreen: {
		opacity: 1
	}
}

const bulletVariants = {
	minimized: {
		opacity: 1,
		x: 70
	},
	hidden: {
		x: 0,
		opacity: 0
	},
	visible: {
		opacity: 1,
		x: 0
	},
	fullscreen: {
		display: "none"
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

	const [{ headerState }, dispatch] = useGlobalStateValue();
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
			setCurrentVariant("minimized")
		}
		else if (headerState === headerStates.Mobile)
		{
			setCurrentVariant("hidden")
		}
		else if (headerState === headerStates.Fullscreen)
		{
			setCurrentVariant("fullscreen")
		}
	}, [headerState, currentVariant])

	const handleMenuClick = (index: number) => {
		onMenuItemClick(index)

		// If mobile, close menu
		if (currentVariant === "fullscreen") {
			setCurrentVariant("mobile")
			dispatch({type: 'changeHeaderState', newHeaderState: headerStates.Mobile})
		}
	}

	return (
		<motion.menu className='FloatingMenu' variants={menuVariants} animate={currentVariant}>
			<motion.div className='FloatingMenu__ActiveFragment__container' animate={{ y: activeSectionIndex * 24, x: currentVariant === "minimized" ? 70 : 0, display: currentVariant === "fullscreen" ? "none" : "block" }}>
				<div className='FloatingMenu__ActiveFragment' />
			</motion.div>
			<ul className="'FloatingMenu__list">
				{sections.map((section: MenuItem) => {
					return <li key={section.id} className={`FloatingMenu__item ${section.id === activeSectionIndex ? 'active' : ''}`} onClick={() => handleMenuClick(section.id)}>
						<motion.span variants={bulletVariants} animate={currentVariant} className='FloatingMenu__item__bullet'>•</motion.span>
						<motion.span variants={textVariants} animate={currentVariant} className='FloatingMenu__item__text'>{section.name}</motion.span>
					</li>
				})}
			</ul>
		</motion.menu>
	);
}

export default FloatingMenu;