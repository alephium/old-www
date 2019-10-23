import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo-h.svg';
import { motion, useViewportScroll } from 'framer-motion';
import useWindowDimensions from '../../hooks/windowsDimensions'
import { useGlobalStateValue, headerStates } from '../../store/state';

const headerVariants = {
  wide: { width: '240px', borderBottomRightRadius: 20, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.05)', height: 60 },
	tall: { width: '180px', borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)', height: 270},
	minimized: { width: '45px', borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)', height: 270},
}

const logoVariants = {
  wide: { scale: 1, x: 0 },
	tall: { scale: 0.8, x: -30 },
	minimized: { scale: 1, x: -35 }
}

const variantToHeaderState = (variantName: string) => {
	if (variantName === "wide") return headerStates.Wide
	else if (variantName === "tall") return headerStates.Tall
	else return headerStates.Minimized
}

const spring = {
  type: "spring",
  damping: 50,
  stiffness: 100
}

let previousVariant: string
let newVariant: string

const Header = () => {
	const { scrollY } = useViewportScroll();
	const [isScrolledDown, setIsScrolledDown] = useState(false)
	const [currentVariant, setCurrentVariant] = useState("wide")
	const [, dispatch] = useGlobalStateValue()
	const { width: windowWidth } = useWindowDimensions();

	useEffect(() => scrollY.onChange(y => setIsScrolledDown(y > 1000)), [scrollY])

	// Compute states
	useEffect(() => {
		if (isScrolledDown) {
			if (windowWidth < 1200) {
				newVariant = "minimized"
			} else {
				newVariant = "tall"
			}
		} else {
			newVariant = "wide"
		}

		if (previousVariant !== newVariant)
		{
			setCurrentVariant(newVariant)
			console.log(variantToHeaderState(newVariant))
			dispatch({type: 'changeHeaderState', newHeaderState: variantToHeaderState(newVariant)})
			previousVariant = newVariant
		}
	}, [isScrolledDown, windowWidth, dispatch])

	// Events
	const handleHeaderMouseEnter = () => {

		if (currentVariant === "minimized")
		{
			setCurrentVariant("tall")
			dispatch({type: 'changeHeaderState', newHeaderState: headerStates.Tall})
		}
	}

	const handleHeaderMouseLeave = (e: React.MouseEvent) => {
		//@ts-ignore
		if (!e.relatedTarget.className.includes("FloatingMenu") && !e.relatedTarget.parentNode.className.includes("FloatingMenu")) {
			if (currentVariant === "tall")
			{
				setCurrentVariant(previousVariant)
				dispatch({type: 'changeHeaderState', newHeaderState: variantToHeaderState(previousVariant)})
			}
		}
	}

	return (
		<React.Fragment>
			<motion.header className='Header'
			variants={headerVariants}
			animate={currentVariant}
			transition={spring}
			>
				<motion.img src={logo} className="Header__logo" alt="logo"
					variants={logoVariants}
					animate={currentVariant}
					transition={spring}
				/>
			</motion.header>
			<div className='Header__event-zone'
				onMouseOverCapture={handleHeaderMouseEnter}
				onMouseOutCapture={handleHeaderMouseLeave}
			/>
		</React.Fragment>
	);
}

export default Header;