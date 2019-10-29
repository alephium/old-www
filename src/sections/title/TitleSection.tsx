import React from 'react';
import './TitleSection.scss';
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';

const TitleSection = () => {
	return (
		<section className='TitleSection'>
			<div className='TitleSection__background-fragments'>
				<ParallaxWrapper className='TitleSection__background-fragment fragment1' movingSpeed={1} style={{ skewY: '-10deg'}}/>
				<ParallaxWrapper className='TitleSection__background-fragment fragment2' movingSpeed={0.8} style={{ skewY: '10deg'}} />
				<ParallaxWrapper className='TitleSection__background-fragment fragment3' movingSpeed={0.6} style={{ skewY: '-10deg'}} />
			</div>
			<div className='TitleSection__Splash-Container'>
				<div className='TitleSection__Splash'>
					<ParallaxWrapper className='TitleSection__BlockFlow' movingSpeed={0.2} style={{ skewY: "10deg"}}>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>Fully decentralized, shared consensus protocol<br />with maximum composability</span>
						<div className='TitleSection__BlockFlow__box'>for massive adoption</div>
					</ParallaxWrapper>
					<ParallaxWrapper className={'TitleSection__Splash__background-image'} movingSpeed={0.6} style={{scale: 1.6}} />
				</div>
			</div>
			<ParallaxWrapper className='TitleSection__GetStarted' movingSpeed={-0.4}>
				<div>
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
