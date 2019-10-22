import React, { useState, useRef, useLayoutEffect, MouseEvent } from 'react';
import './TitleSection.css';
import { motion, useViewportScroll, useTransform } from "framer-motion"

const TitleSection = () => {

	const [backgroudImageTop, setElementTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [backgroudImageTop -1, backgroudImageTop + 1], [0, -0.4], {
    clamp: false
	});

  useLayoutEffect(() => {
		const element = ref.current;

		if (element != null) {
			setElementTop(element.offsetTop);
		}
	}, [ref]);


	const handleMouseMove = (e: MouseEvent) => {
		console.log(e.screenX)
	}

	return (
		<section className='TitleSection'>
			<div className='TitleSection__Splash-Container'>
				<div className='TitleSection__Splash'>
					<div className='TitleSection__BlockFlow'>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>consensus <br /> and scalable protocol</span>
						<div className='TitleSection__BlockFlow__box'>for massive adoption</div>
					</div>
					<motion.div ref={ref} className='TitleSection__Splash__background-image' style={{y, scale: 1.6}} />
				</div>
			</div>
			<div className='TitleSection__GetStarted' onMouseMove={handleMouseMove}>
				<div className='TitleSection__GetStarted__title'>
					<div className='GetStarted__title__top-label'>Get</div>
					<div className='GetStarted__title__bottom-label'>Started</div>
				</div>
				<div className='TitleSection__button-list'>
					<a href="https://www.alephium.org/docs/white-paper.pdf"><button className='TitleSection__button'>Technical paper</button></a>
					<a href="https://www.alephium.org/docs/Onepage.pdf"><button className='TitleSection__button'>One pager</button></a>
					<a href="https://github.com/alephium"><button className='TitleSection__button'>Source repository</button></a>
				</div>
			</div>
		</section>
	);
}

export default TitleSection;