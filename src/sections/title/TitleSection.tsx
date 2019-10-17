import React from 'react';
import './TitleSection.css';

const TitleSection: React.FC = () => {
	return (
		<section className='TitleSection'>
			<div className='TitleSection__Splash-Container'>
				<div className='TitleSection__Splash'>
					<div className='TitleSection__BlockFlow'>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>consensus <br /> and scalable protocol</span>
						<div className='TitleSection__BlockFlow__box'>for massive adoption</div>
					</div>
					<div className='TitleSection__Splash__background-image' />
				</div>
			</div>
			<div className='TitleSection__GetStarted'>
				<div className='TitleSection__GetStarted__title'>
					<div className='GetStarted__title__top-label'>Get</div>
					<div className='GetStarted__title__bottom-label'>Started</div>
				</div>
				<div className='TitleSection__button-list'>
					<button className='TitleSection__button'>Technical paper</button>
					<button className='TitleSection__button'>One pager</button>
					<button className='TitleSection__button'>Source repository</button>
				</div>
			</div>
		</section>
	);
}

export default TitleSection;