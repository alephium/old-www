import React, { useState, useRef, useLayoutEffect } from 'react';
import './ParallaxWrapper.scss';
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useInView } from 'react-intersection-observer';

interface ParallaxWrapperProps {
	movingSpeed: number
	style?: object
	className?: string
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ movingSpeed, className, style, children }) => {
	const [elementTop, setElementTop] = useState();
  const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useViewportScroll();

	const [viewRef, inView] = useInView()

	const y = useTransform(scrollY, [elementTop -1, elementTop + 1], [0, movingSpeed], {
    clamp: false
	});

  useLayoutEffect(() => {
		if (inView)
		{
			const element = ref.current;

			if (element != null) {
				setElementTop(window.pageYOffset + element.getBoundingClientRect().top);
			}
		}
	}, [ref, inView]);

	return (
		<motion.div ref={ref} className={`ParallaxWrapper ${className}`} style={{ y, ...style }}>
			<div className="ParallaxWrapper__children-pointer" ref={viewRef} />
			{children}
		</motion.div>
	)
}

export default ParallaxWrapper