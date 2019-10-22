import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo-h.svg';
import { motion, useViewportScroll } from 'framer-motion';

const headerVariants = {
  wide: { width: '240px', borderBottomRightRadius: 20, boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.05)', height: 60 },
  small: { width: '180px', borderBottomRightRadius: 20, boxShadow: '0px 15px 15px rgba(0, 0, 0, 0.08)', height: 270},
}

const logoVariants = {
  wide: { scale: 1, x: 0 },
  small: { scale: 0.8, x: -30 },
}

const spring = {
  type: "spring",
  damping: 50,
  stiffness: 100
}

const Header = () => {
	const { scrollY } = useViewportScroll();
	const [isScrolledDown, setIsScrolledDown] = useState(false)

	useEffect(() => scrollY.onChange(y => setIsScrolledDown(y > 1000)), [scrollY])

	return (
		<motion.header className='Header'
			animate={isScrolledDown ? "small" : "wide"}
			variants={headerVariants}
			transition={spring}
		>
			<motion.img src={logo} className="Header__logo" alt="logo"
				animate={isScrolledDown ? "small" : "wide"}
				variants={logoVariants}
				transition={spring}
			/>
		</motion.header>
	);
}

export default Header;