import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './ParallaxWrapper.scss';
import { motion, useViewportScroll, useTransform } from "framer-motion"

interface ParallaxWrapperProps {
	movingSpeed: number
	style?: object
	className?: string
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ movingSpeed, className, style, children }) => {
	const [elementTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useViewportScroll();

	const y = useTransform(scrollY, [elementTop -1, elementTop + 1], [0, movingSpeed], {
    clamp: false
	});

  useLayoutEffect(() => {
		const element = ref.current;

		if (element != null) {
			setElementTop(element.offsetTop);
		}
	}, [ref]);

	return (
		<motion.div ref={ref} className={`ParallaxWrapper ${className}`} style={{ y, ...style }}>
			{children}
		</motion.div>
	)
}

export default ParallaxWrapper