import React, { useEffect, useState } from 'react';
import './FloatingMenu.scss'
import { motion } from 'framer-motion'
import { useGlobalStateValue, headerStates } from '../../store/state';
import useWindowDimensions from '../../hooks/windowsDimensions';

const menuVariants = {
	minimized: {
		opacity: 1,
		y: 0,
		x: "-100%",
		fontSize: 13,
		marginLeft: 40
	},
	hidden: {
		x: 0,
		y: 0,
		opacity: 0,
		display: 'none',
		marginLeft: 40
	},
	visible: {
		display: 'block',
		fontSize: 13,
		opacity: 1,
		y: 0,
		x: 0,
		marginLeft: 40
	},
	fullscreen: {
		display: 'block',
		opacity: 1,
		x: "calc(50vw - 50%)",
		y: "calc(30vh - 50%)",
		fontSize: 25,
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
		display: "block",
		opacity: 1,
		x: 70
	},
	hidden: {
		display: "block",
		x: 0,
		opacity: 0
	},
	visible: {
		display: "block",
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
	{ id: 1, name: "FAQ" },
	{ id: 2, name: "Roadmap" },
	{ id: 3, name: "Team" },
	{ id: 4, name: "News" },
]

const FloatingMenu: React.FC<FloatingMenuProps> = ({ activeSectionIndex = 0, onMenuItemClick }) => {

	const [{ headerState }, dispatch] = useGlobalStateValue();
	const [currentVariant, setCurrentVariant] = useState("visible")
	const { width: windowWidth } = useWindowDimensions();

	useEffect(() => {
		if (headerState === headerStates.Wide) {
			if (windowWidth > 800) {
				setCurrentVariant("visible")
			} else {
				setCurrentVariant("hidden")
			}
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
	}, [headerState, currentVariant, windowWidth])

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