import React, { useState, useRef, useLayoutEffect, MouseEvent } from 'react';
import './TitleSection.css';
import { motion, useViewportScroll, useTransform } from "framer-motion"
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';

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
					<ParallaxWrapper className='TitleSection__BlockFlow' movingSpeed={0.2} style={{ skewY: "10deg"}}>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>consensus <br /> and scalable protocol</span>
						<div className='TitleSection__BlockFlow__box'>for massive adoption</div>
					</ParallaxWrapper>
					<ParallaxWrapper className={'TitleSection__Splash__background-image'} movingSpeed={0.6} style={{scale: 1.6}} />
				</div>
			</div>
			<ParallaxWrapper className='TitleSection__GetStarted' movingSpeed={-0.4}>
				<div onMouseMove={handleMouseMove}>
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
			</ParallaxWrapper>
		</section>
	);
}

export default TitleSection;