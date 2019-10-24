import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../images/logo-h.svg';
import { motion, useViewportScroll } from 'framer-motion';
import useWindowDimensions from '../../hooks/windowsDimensions'
import { useGlobalStateValue, headerStates } from '../../store/state';

const mobileWidth: number = 800;

const headerVariants = {
  wide: { width: 240, borderBottomRightRadius: 20, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.05)', height: 60 },
	tall: { width: 180, borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)', height: 270 },
	minimized: { width: 45, borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)', height: 270 },
	mobile: { width: 45, height: 110, borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)' },
	fullscreen: { width: '100%', height: '100%', borderBottomRightRadius: 0 }
}

const logoVariants = {
  wide: { scale: 1, x: 0, marginLeft: 50 },
	tall: { scale: 0.8, x: -30, marginLeft: 50 },
	minimized: { scale: 1, x: -35, marginLeft: 50 },
	mobile: { scale: 1, x: -35, marginLeft: 50 },
	fullscreen: { scale: 1, x: "calc(50vw - 50%)", marginLeft: 0 }
}

const hamburgerVariants = {
	mobile: { top: 75, x: 10 },
	fullscreen: { top: 22, x: 14 }
}

const variantToHeaderState = (variantName: string) => {
	if (variantName === "wide") return headerStates.Wide
	else if (variantName === "tall") return headerStates.Tall
	else if (variantName === "mobile") return headerStates.Mobile
	else if (variantName === "fullscreen") return headerStates.Fullscreen
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
	const [globalState, dispatch] = useGlobalStateValue()
	const { width: windowWidth } = useWindowDimensions();

	const isMobile = windowWidth < mobileWidth

	useEffect(() => scrollY.onChange(y => setIsScrolledDown(y > 1000)), [scrollY])

	// Compute states
	useEffect(() => {
		if (isScrolledDown) {
			if (isMobile) {
				newVariant = "mobile"
			} else if (windowWidth < 1200) {
				newVariant = "minimized"
			} else {
				newVariant = "minimized" // Use "tall" if you want the menu to appear when scrolling down
			}
		} else {
			newVariant = "wide"
		}

		if (previousVariant !== newVariant)
		{
			setCurrentVariant(newVariant)
			dispatch({type: 'changeHeaderState', newHeaderState: variantToHeaderState(newVariant)})
			previousVariant = newVariant
		} else if (globalState.headerState === headerStates.Mobile && currentVariant === "fullscreen")
		{
			// Header has been closed by clicking on menu
			setCurrentVariant("mobile")
			previousVariant = "fullscreen"
		}
	}, [isScrolledDown, windowWidth, dispatch, isMobile, globalState, currentVariant])

	// Events

	const handleHeaderMouseEnter = () => {

		if (currentVariant === "minimized" && !isMobile)
		{
			setCurrentVariant("tall")
			dispatch({type: 'changeHeaderState', newHeaderState: headerStates.Tall})
		}
	}

	const handleHeaderMouseLeave = (e: React.MouseEvent) => {
		//@ts-ignore
		if (e.relatedTarget && !e.relatedTarget.className.includes("FloatingMenu")) {
			if (currentVariant === "tall" && !isMobile)
			{
				setCurrentVariant(previousVariant)
				dispatch({ type: 'changeHeaderState', newHeaderState: variantToHeaderState(previousVariant) })
			}
		}
	}

	const handleHamburgerClick = () => {
		const targetVariant = currentVariant === "mobile" ? "fullscreen" : "mobile"
		console.log(targetVariant)
		dispatch({ type: 'changeHeaderState', newHeaderState: variantToHeaderState(targetVariant) })
		setCurrentVariant(targetVariant)
	}

	const renderHamburger = () => {
		if (currentVariant === "mobile" || currentVariant === "fullscreen")
		{
			return (
				<motion.button className={`hamburger hamburger--collapse ${currentVariant === "fullscreen" ? "is-active" : ""}`} type="button"
					onClick={handleHamburgerClick}
					variants={hamburgerVariants}
					animate={currentVariant}
					transition={spring}
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</motion.button>
			)
		}
	}

	return (
		<React.Fragment>
			<div className='Header__event-zone'
				onMouseOverCapture={handleHeaderMouseEnter}
				onMouseOutCapture={handleHeaderMouseLeave}
			/>
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
				{renderHamburger()}
			</motion.header>
		</React.Fragment>
	);
}

export default Header;